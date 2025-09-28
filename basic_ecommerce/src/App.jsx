import './App.css'
import Cartsidebar from './components/Cartsidebar'
import Navbar from './components/Navbar'
import Productcard from './components/Productcard'
import Sidebar from './components/Sidebar'
import productsData from "./products.json"

import { useState } from 'react'

function App() {

  // For Search Option 
  const [search,setSearch] = useState('')
  // For Display Brands
  const brands = [...new Set(productsData.map((p)=>p.brand))].sort()

  // For Display Price Range
  const [priceRange, setPriceRange] = useState([Math.min(...productsData.map((p)=>p.price)),Math.max(...productsData.map((p)=>p.price))])

  // For Get User Selected Brands
  const [selectedBrand, setSelectedBrand]=useState([])

  // For Get User Selected Ram
  const [selectedRam, setSelectedRam] = useState(null)

  // For Get User Selected Storage
  const [selectedStorage, setSelectedStorage] = useState(null)


  // Cart Operations 
  const [cartItems, setCartItems] = useState([])
  const [isCartOpen,setIsCartOpen] = useState(false)
  // console.log(cartItems)


  const addToCart = (product)=> {
    // console.log(product);
    // setCartItems((prevCartItems)=>[...prevCartItems,product])
    setCartItems((prevCartItems)=>{
      const existingItem = prevCartItems.find((item)=>item.id === product.id)
      if(existingItem){
        // Update Existing Cart Item Quantity
        return prevCartItems.map((item)=>item.id === product.id ? {...item,quantity:item.quantity+1}:{...item})
      }else{
        // Add New Cart Item 
        return [...prevCartItems,{...product,quantity:1}]
      }      
    })
    
    setIsCartOpen(true)
  }
  

  const removeFromCart = (id)=> {
    setCartItems((prev)=>prev.filter((item)=>item.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id)
    }else{
      setCartItems((prevCartItems)=>prevCartItems.map((item)=>item.id === id?{...item,quantity}:item))
    }
    
  } 

  // Filter Products 
  const filterProducts = productsData.filter((product)=>{
    const {id,name,brand,color,ram,storage,display,price} = product

    const matchSearches = name.toLowerCase().includes(search.toLowerCase()) || brand.toLowerCase().includes(search.toLowerCase()) || color.toLowerCase().includes(search.toLowerCase())

    const matchBrands = selectedBrand.length == 0 || selectedBrand.includes(brand)

    const matchPrice = price>= priceRange[0] && price<= priceRange[1]

    const matchRam = selectedRam === null || selectedRam === (ram)

    const matchStorage = selectedStorage === null || selectedStorage === (storage)

    return matchSearches && matchBrands && matchPrice && matchRam && matchStorage
    
  })
  
  return (
    <>
      
      <div>
        <Navbar search={search} setSearch={setSearch} cartItems={cartItems} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/>
        <div className='flex'>
          <Sidebar brands={brands} priceRange={priceRange} setPriceRange={setPriceRange} selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} selectedRam={selectedRam} setSelectedRam={setSelectedRam} selectedStorage={selectedStorage} setSelectedStorage={setSelectedStorage}  />
          
          <div className='flex-1 bg-emerald-50'>
            {/* <div className='p-4'>
              <p>{search}</p>
              <p>{JSON.stringify(selectedBrand)}</p>
              <p>{JSON.stringify(priceRange)}</p>
              <p>{selectedRam}</p>
              <p>{selectedStorage}</p>
            </div> */}
            <div className='max-w-6xl mx-auto p-4'>
              <h2 className='text-xl font-bold p-4 text-emerald-900'>Products ({filterProducts.length})</h2>
              {
                filterProducts.length==0?<p className='text-gray-600 text-center'>No Products Found Matching Your Criteria.</p>:(
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                      filterProducts.map((product)=>(
                        <Productcard key={product.id} product={product} addToCart={addToCart}/> 
                      ))
                    }
                  </div>
                )
                
              }
            </div>
        </div>
        <Cartsidebar cartItems={cartItems} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} updateQuantity={updateQuantity} removeFromCart={removeFromCart}/>
        </div>
        
      </div>
    </>
  )
}

export default App
