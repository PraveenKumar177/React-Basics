import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react'
function App() {
  const [users,setUsers] = useState([])
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [editingUser, setEditingUser] = useState(null)

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name)
      setEmail(editingUser.email)
    } else {
      setName('')
      setEmail('')
    }
  }, [editingUser])



  const handleSubmit =(e)=>{
    e.preventDefault()
    if(!name || !email) return



      if (editingUser) {
        // Update
        const updatedUser = users.map((u)=>u.id == editingUser.id ? {...u,name,email}:u)
        setUsers(updatedUser)
        setEditingUser(null)
      } else {
        // Add
        const newUser = {id:Date.now(), name,email}
        setUsers(prev=>[...prev,newUser])
      }


      setName("")
      setEmail("")

  }

  const handleDelete = (id)=>{
    const updatedUser = users.filter((user)=>user.id !== id)
    setUsers(updatedUser)
  }


  return (
    <>
        <h1 className='text-center'>User CRUD</h1>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row g-4">
                <div className="col-6">
                  <h2>User Form</h2>
                  <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                      <label htmlFor="name" className='form-label'>Name</label>
                      <input 
                      type="text" 
                      id='name'
                      className='form-control' 
                      placeholder='Enter Your Name'
                      onChange={(e)=>setName(e.target.value)}
                      value={name}
                       />
                    </div>
                    <div className='mb-3'>
                      <label htmlFor="email" className='form-label'>Email</label>
                      <input 
                      type="email" 
                      id='email'
                      className='form-control'  
                      placeholder='Enter Your Email'
                      onChange={(e)=>setEmail(e.target.value)}
                      value={email}
                      />
                    </div>
                    <div className='d-flex justify-content-around'>
                      <input type='submit' className='btn btn-success' value={editingUser?"Update":"Submit"}/>
                      <input type='reset' className='btn btn-danger'/>
                    </div>
                  </form>
                </div>
                <div className="col-lg-12">
                  {users.length > 0 ?
                  <table className='table table-bordered table-striped table-hover'>
                    <tbody>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                        <th>Action</th>
                      </tr>
                      {
                        users.map((user)=>(
                          <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                              <button className='btn btn-primary' onClick={()=>setEditingUser(user)} >Edit</button>
                            </td>
                            <td>
                              <button className='btn btn-danger' onClick={()=>handleDelete(user.id)}>Delete</button>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table> : <h3 className='text-center '>Users Not Found !</h3>
                  }
                  
                </div>
              </div>
              
            </div>
          </div>
        </div>
    </>
  )
}

export default App
