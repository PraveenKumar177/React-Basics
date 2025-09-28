const Cartsidebar = ({cartItems,isCartOpen,setIsCartOpen,updateQuantity,removeFromCart})=>{
    const totalPrice = cartItems.reduce((sum,item)=>sum+item.price*item.quantity,0 )
    

    return <div className={`bg-white  w-84 h-full fixed top-0 right-0 shadow-2xl z-55 transform transition-all  ${(isCartOpen)?"translate-x-0":"translate-x-full"}`}>
        <div className="p-4 h-full flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl text-emerald-800 font-semibold">Your Cart</h2>
                    <button className="text-xl text-gray-600 hover:text-gray-800 font-semibold" onClick={()=>setIsCartOpen(false)}>x</button>
                </div>

                {cartItems.length === 0?(
                    <p className="text-center mt-10 text-gray-600">Your cart is Empty</p>
                ):(
                    <div>
                        {cartItems.map((item)=>(
                            <div key={item.id} className="flex mb-4 items-center">
                                <img src={item.image} alt="" className="w-16 h-16 object-contain mr-4" />
                                <div className="flex-1">
                                    <h3 className="text-sm font-semibold">{item.name}</h3>
                                    <p className="text-xs text-gray-500">₹ {item.price} x {item.quantity}</p>
                                    <div className="flex items-center mt-1">
                                        <button className="px-2 py-1 bg-gray-200 rounded" onClick={()=>updateQuantity(item.id,item.quantity-1)}>-</button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <button className="px-2 py-1 bg-gray-200 rounded" onClick={()=>updateQuantity(item.id,item.quantity+1)}>+</button>
                                        <button className="ml-4 text-red-400 hover:text-red-700" onClick={()=>removeFromCart(item.id)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="border-t pt-4">
                <p className="text-lg font-semibold">₹ Total : {totalPrice.toFixed(2)}</p>
                <button className="bg-emerald-600 bg-emerald-700 text-white w-full py-2 rounded-lg mt-4">Proceed To Checkout</button>
            </div>

        </div>
    </div>
}


export default Cartsidebar