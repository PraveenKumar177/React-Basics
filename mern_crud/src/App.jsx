import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios'
import { useEffect, useState } from 'react'
function App() {
  const [show,setShow] = useState(false)
  const [userData,setUserData] = useState({name:"",age:"",city:""})
  const [users,setUsers] = useState([])
  const [filteredUsers,setFilteredUsers] = useState([])
  const getAllUsers = async()=>{
     await axios.get(`http://localhost:3000/users`)
      .then(res=>{
        setUsers(res.data)
        setFilteredUsers(res.data)
      })
  }
  console.log(userData);
  
  

  useEffect(()=>{
    getAllUsers()
  },[])

  const handleSearch= (e) =>{
    const searchText = e.target.value
    const filterUsers = users.filter(user =>{
       return user.name.toLowerCase().includes(searchText) || user.city.toLowerCase().includes(searchText)
    } )
    setFilteredUsers(filterUsers)  
  }


  const handleDelete = async (id)=>{
    
    await axios.delete(`http://localhost:3000/users/${id}`)
    .then(res=>{
      setUsers(res.data)
      setFilteredUsers(res.data)
    })
  }

  const handleEdit = async(user)=>{
    setShow(true)
    setUserData(user) 
  }


  const handleSubmit = async (e)=>{
    e.preventDefault()
    
    if (userData.id) {
      // Update 
      await axios.patch(`http://localhost:3000/users/${userData.id}`,userData)
      .then(res=>console.log(res))
    } else {
      // Add 
      await axios.post(`http://localhost:3000/users/`,userData)
      .then(res=>console.log(res))
    }
    
    setUserData({name:"",age:"",city:""})
    setShow(false)
    getAllUsers()

  }
  
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center my-2">
              <h3>CRUD Application with React Js Frontend and Node.js Backend</h3>
            </div>
          </div>
          
            <div className="row my-3">
                <div className="col-md-6">
                  <input type="text" className='form-control' placeholder='Seacrch text Here' onChange={handleSearch} />
                </div>
                <div className="col-md-6 text-center">
                  <button className='btn btn-success'
                  onClick={()=>setShow(true)}
                  >Add Data</button>
                </div>
            </div>
          
            <div className="row">
              <div className="col-12">
                <table className='table table-striped table-hover table-bordered'>
                  <tbody>
                    <tr>
                      <th>S.No</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>City</th>
                      <th>Action</th>
                      <th>Action</th>
                    </tr>
                    {filteredUsers.map((user)=>(
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.city}</td>
                        <td>
                          <button className='btn btn-primary' onClick={()=>handleEdit(user)}>Edit</button>
                        </td>
                        <td>
                          <button className='btn btn-danger' onClick={()=>handleDelete(user.id)}>Delete</button>
                        </td>
                      </tr>
                    ))}
                    
                  </tbody>
                </table>
              </div>
            </div>
        </div>
      </section>


      {/* Bootstrap Modal */}
      <form onSubmit={handleSubmit}>
      <div 
        className={`modal fade ${show ? "show d-block" : ""}`} 
        tabIndex="-1" 
        style={{ background: "rgba(0,0,0,0.5)" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            
            {/* Header */}
            <div className="modal-header">
              <h5 className="modal-title">ADD USER</h5>
              <button 
                type="button" 
                className="btn-close" 
                onClick={() => setShow(false)}
              ></button>
            </div>

            {/* Body */}
            <div className="modal-body">
              
                <div className="row">
                  <div className="col-12">
                    <label htmlFor="name" className='form-label'>Full Name</label>
                    <input type="text" 
                    id='name' 
                    className='form-control'
                    value={userData.name}
                    onChange={(e)=>setUserData({...userData,name:e.target.value})} />
                  </div>
                  <div className="col-12">
                    <label htmlFor="age" className='form-label'>Age</label>
                    <input type="number" 
                    id='age' 
                    className='form-control'
                    value={userData.age}
                    onChange={(e)=>setUserData({...userData,age:e.target.value})} />
                  </div>
                  <div className="col-12">
                    <label htmlFor="city" className='form-label'>City</label>
                    <input type="text" 
                    id='city' 
                    className='form-control'
                    value={userData.city}
                    onChange={(e)=>setUserData({...userData,city:e.target.value})} />
                  </div>
                </div>
              
            </div>

            {/* Footer */}
            <div className="modal-footer">
              <button 
              type='submit'
                className="btn btn-success"
                
              >
                Add User
              </button>
            </div>

          </div>
        </div>
      </div>
      </form>
    </>
  )
}

export default App
