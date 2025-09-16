import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import UserForm from './components/UserForm'
import UserList from './components/UserList'
import Counter from './components/Counter'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
function App() {
  const [selectedUser,setSelecteduser] = useState(null)
  const users = useSelector(state => state.users)
  console.log(users);
  
  useEffect(()=>{
    localStorage.setItem("users",JSON.stringify(users))
  },[users])

  return (
    <>
    {/* Basic Counter from Redux  */}
    {/* <Counter /> */}

      <h1 className='text-center'>User CRUD</h1>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <UserForm selectedUser={selectedUser} setSelecteduser={setSelecteduser}/>
                <UserList setSelecteduser={setSelecteduser}/>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default App
