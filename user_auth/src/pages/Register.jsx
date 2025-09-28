import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Register = () => {
    const navigate = useNavigate()
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')



    const handleSubmit =(e)=>{
        e.preventDefault()

        axios.post(`http://localhost:3001/signup`,{
            username:username,password:password
        })
        .then(res=>{
            alert(res.data)
            navigate("/login")
        })


        setUsername("")
        setPassword("")
        
    }
    return (
        <>
            <section className="my-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="text-center">User Registration</h3>
                            <div className="card">
                                <div className="p-3">
                                    <form onSubmit={handleSubmit} >
                                        <div className="mb-2">
                                            <label htmlFor="username" className="form-label" >User Name</label>
                                            <input 
                                            type="text"
                                            className="form-control" 
                                            placeholder="Enter Your Username" 
                                            id="username"
                                            onChange={(e)=>setUsername(e.target.value)}
                                            value={username}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="password" className="form-label" >Password</label>
                                            <input 
                                            type="password"
                                            className="form-control" 
                                            placeholder="Enter Your password" 
                                            id="password"
                                            onChange={(e)=>setPassword(e.target.value)}
                                            value={password}
                                            />
                                        </div>
                                        <div className="">
                                            <input type="submit"
                                            className="btn btn-primary" />
                                            
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register