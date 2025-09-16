import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import UserList from './components/UserList'
import UserForm from './components/UserForm'
import { useState } from 'react'

function App() {
  const [selectedUser,setSelectedUser] = useState(null)
  return (
    <>
      <h1 className='text-center'>User CRUD</h1>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <UserForm selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
                <UserList setSelectedUser={setSelectedUser}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
