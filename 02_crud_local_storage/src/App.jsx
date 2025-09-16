import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import UserForm from './components/UserForm'
import UserList from './components/UserList'
import { useState,useEffect } from 'react'
function App() {

  const [users,setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])
  const [updatingUser,setUpdatingUser] = useState(null)

  console.log(users);
  

  useEffect(()=>{
        localStorage.setItem("users",JSON.stringify(users))
    },[users])
  

  return (
    <>
      <h1 className='text-center'>User CRUD</h1>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <UserForm setUsers={setUsers} users={users} updatingUser={updatingUser}/>
                <UserList users={users} setUsers={setUsers} setUpdatingUser={setUpdatingUser}/>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default App
