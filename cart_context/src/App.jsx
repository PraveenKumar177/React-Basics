
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { useState,useEffect } from 'react'
// Components 
import Header from './components/Header'
import Home from './components/Home'
import ViewCart from './components/ViewCart'

// Context 
import { CartContext } from './context/cartContext'


function App() {

  const [cart, setCart] = useState(()=>{
    const tempCart = JSON.parse(sessionStorage.getItem("cart"))
    return tempCart ? tempCart : []
  });


  useEffect(()=>{
    sessionStorage.setItem("cart",JSON.stringify(cart))
  },[cart])
  const addToCart = (product) => {
    
    setCart((prev)=>{

      const existProduct = prev.find((item)=>item.id === product.id)
        if (existProduct) {
          return prev.map((item)=>item.id === product.id ? {...item,qty:item.qty+1}:{...item})
        } else {
          return [...prev,{...product,qty:1}]
        }
      
    })
  };

  const removeCart = (id) => {
    setCart((prev)=>{
      return prev.filter(item=>item.id !== id)
    })
  }

  return (
    <>
      <CartContext.Provider value={{cart,setCart}}>
        <Router>
          <Header cart={cart}  />
          <div>
            <Routes>
              <Route path='/' element={<Home/>} ></Route>
              <Route path='/home' element={<Home addToCart={addToCart} removeCart={removeCart}/>}  ></Route>
              <Route path='/viewcart' element={<ViewCart cart={cart} setCart={setCart} removeCart={removeCart}/>} ></Route>
            </Routes>
          </div>
        </Router>

      </CartContext.Provider>
      
      

      
    </>
  )
}

export default App
