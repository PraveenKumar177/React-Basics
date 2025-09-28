import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const ProductCart = ({item,addToCart,removeCart}) => {
  const {cart,setCart} = useContext(CartContext)
  
  const isInCart = cart.some(cartItem => cartItem.id === item.id);
    
  return (
    <div  className="product-card">
        <img src={item.pic} alt={item.name} />
        <div className="product-info">
        <h3>{item.name}</h3>
        <p>Shop: {item.shop}</p>
        <p>Type: {item.ftype}</p> 
        <p className="price">₹ {item.amt}</p>
          {isInCart ? 
           <button onClick={() => removeCart(item.id)}>Remove from Cart</button>: 
          <button onClick={()=>addToCart(item)}>Add To Cart</button>
          }
            
        </div>
    </div>
  )
}

export default ProductCart