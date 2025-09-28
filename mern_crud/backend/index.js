const express = require("express")
const cors = require("cors")
const fs = require("fs")

const app = express()
app.use(express.json())
// Cors Error 
app.use(cors({
    origin:`http://localhost:5173`,
    methods:["GET","POST","PATCH","DELETE"]
}))

// Datas 
const users = require("./sample.json")


// Get All Users Api 
app.get("/users",(req,res)=>{
   return res.json(users)  
})


// Delete User Api 
app.delete("/users/:id",(req,res)=>{  
    const id = Number(req.params.id)
    const filteredUsers = users.filter(user=>user.id !== id)
    console.log(id);
    console.log(filteredUsers);
    
    fs.writeFile("./sample.json",JSON.stringify(filteredUsers),(err,data)=>{
        return res.json(filteredUsers)
    })
})

// Add User Api 

app.post("/users",(req,res)=>{
    const {name,age,city} = req.body
    const id = Date.now()
    if (!name || !age || !city) {
        res.status(400).send({message:"All Fields are Required"})
    }
    users.push({id,name,age,city})
    fs.writeFile("./sample.json",JSON.stringify(users),(err,data)=>{
        return res.json({message : "User Data Added Successfully !"})
    })
})

// Update User Api 
app.patch("/users/:id",(req,res)=>{
    console.log("Update Api Working");
    
    const id = req.params.id
    const index = users.findIndex((u)=>u.id == id)

    if (index === -1) {
        return res.status(404).send({ message: "User not found" });
    }
    users[index] = {...users[index],...req.body}
    console.log(users)
    
    fs.writeFile("./sample.json",JSON.stringify(users),(err,data)=>{
        return res.json({message : "User Data Added Successfully !"})
    })
    res.send({message:"User Updated Successfully",user:users[index]})


})

app.get("/",(req,res)=>{
    res.send("Hello World")
})


app.listen(3000,()=>{
    console.log(`App is Running in Port 3000`);
    
})