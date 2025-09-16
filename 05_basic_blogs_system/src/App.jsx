import './App.css'
import Posts from './components/Posts'
import PostView from './components/PostView'
import { Routes,Route } from 'react-router-dom'
function App() {


  return (
    <>
      <h1>Posts</h1>
      
      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/post/:id' element={<PostView />} />
      </Routes>
    </>
  )
}

export default App
