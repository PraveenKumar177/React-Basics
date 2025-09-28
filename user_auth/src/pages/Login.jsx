import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { AuthContext } from "../context/AuthContext"

const Login = () => {
    const {dispatch} = useContext(AuthContext)
    const navigate = useNavigate()

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const handleLogin = async (e)=>{
        e.preventDefault()

        const response = await axios.post(`http://localhost:3001/login`,{
            username:username,
            password:password
        })
        
        dispatch({
            type:"LOGIN",
            payload : response.data.token
        })

        localStorage.setItem("token",response.data.token)

        navigate("/profile")

        setUsername("")
        setPassword("")
    }
    return (
        <section className="my-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="text-center">User Login</h3>
                            <div className="card">
                                <div className="p-3">
                                    <form onSubmit={handleLogin} >
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
                                        <div className="d-flex align-items-center justify-content-between">
                                            <input type="submit"
                                            className="btn btn-success" />
                                            <label>
                                                If You Are a new User ? 
                                                <Link
                                                className="btn btn-primary"
                                                to={'register'}>Regsiter</Link>
                                            </label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default Login