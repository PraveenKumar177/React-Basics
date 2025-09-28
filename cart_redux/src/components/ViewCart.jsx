import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { removeCart,updateQty } from "../redux/cartSlice"
import { useDispatch } from "react-redux"

const ViewCart = () => {
  const dispatch = useDispatch()
  const cart = useSelector(state=>state.cart.cart)
  const totValue = cart.reduce((tot,item)=>tot+Number(item.amt * item.qty),0)
  const totProducts = cart.reduce((tot,item)=>tot+Number(item.qty),0)
  




  return (
    <div className="cart-container-view">
      <h2>Your Cart</h2>
      {cart.length === 0 && <div><p className="empty-cart">Cart is empty</p> <Link to={"/home"} ><h2>Shop Products</h2></Link> </div> }
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="item-left">
            <img src={item.pic} alt={item.name} />
            <div className="item-info">
              <h3>{item.name}</h3>
              {/* <p>₹ {item.amt}</p> */}
              <div className="amnt-qty">
                <span>₹ {item.amt} x ₹ {item.qty}</span>
              </div>
              <div className="qty-val">
                <button onClick={()=>dispatch(updateQty({id:item.id,qty:item.qty-1}))}>-</button>
                <span>{item.qty}</span>
                <button onClick={()=>dispatch(updateQty({id:item.id,qty:item.qty+1}))}>+</button>
              </div>
            </div>
          </div>
          <div className="item-right">
            <button onClick={() => dispatch(removeCart(item.id))}>Remove</button>
          </div>
        </div>
      ))}
      {cart.length > 0 && (
        <div className="cart-total">
          <h3>Num of Items: {totProducts}</h3>
          <h3>Total Amount: ₹ {totValue}</h3>
        </div>
      )}
    </div>
  )
}

export default ViewCart