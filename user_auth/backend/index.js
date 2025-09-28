const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(bodyParser.json());


const secretKey = "abcdef";

const users = [];

const verifyToken = (req,res,next)=>{
    const token = req.headers.authorization;
    if(!token) return res.status(401,"Request Failed");

    try {
        const verified = jwt.verify(token,secretKey)
        req.user = verified;
        next()
    } catch (error) {
        res.send(400,"Invalid Token")
    }
}
app.post('/signup', async(req,res)=>{
    try{
        const {username,password} = req.body;
        const hashPassword = await bcrypt.hash(password,10);
        users.push({username,password:hashPassword});
        console.log(users);

        res.status(201).send("User Created Succerssfully")
        
    }catch(err){
        res.status(500).send("Error Creating User")
    }
})


app.post("/login",(req,res)=>{
    try{
        const {username,password} = req.body;
        console.log(users);
        
        const user = users.find(u=>u.username === username);
        if(!user) return res.status(404).send("User Not Found");
        const validPassword = bcrypt.compare(password,user.password);

        if(!validPassword) return res.status(400).send("Invalid Password");
        
        const token = jwt.sign({username:user.username},secretKey);
        res.send({token});

    }catch(err){
        res.status(500).send("Error in Logging")
    }
})


app.get("/profile",verifyToken,(req,res)=>{
    res.send(`${req.user.username}`)
})


app.get("/",(req,res)=>{
    res.send("Hello World")
})



app.listen(3001,()=>console.log("Backend Running in the PORT 3001"))