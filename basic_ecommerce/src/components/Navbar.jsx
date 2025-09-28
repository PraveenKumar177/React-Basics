const Navbar = ({search,setSearch,cartItems,setIsCartOpen})=>{
    const totalCartItems = cartItems.reduce((sum,item)=>sum+item.quantity,0)
    
    return(
        <>
        <nav className="sticky top-0 z-50 bg-emerald-800 p-4 shadow-md ">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-normal">SmartPhone Store</h1>
                <input type="text" name="" id="" placeholder="Search Smart Phones, Brands, Colors..." className="bg-white p-3 rounded w-1/2 focus:outline-none" onChange={(e)=>setSearch(e.target.value)} value={search}/>
                <button className="relative text-4xl" onClick={()=>setIsCartOpen((prev)=>!prev)}>
                    🛒
                    {totalCartItems > 0 && <span className="absolute -top-1 right-1 bg-black text-white rounded-full px-2 py-1 text-sm">{totalCartItems}</span>}

                    
                </button>
            </div>
        </nav>
        </>
    )
}

export default Navbar