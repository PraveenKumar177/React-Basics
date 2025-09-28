import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthContext } from './context/AuthContext'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import { useContext } from 'react'

function App() {
  const {user} = useContext(AuthContext)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} ></Route>
          <Route path="/login" element={<Login />} />
          <Route path='register' element={<Register/>} ></Route>
          <Route path='profile' element={ user? <Profile/>:<Login />} ></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
