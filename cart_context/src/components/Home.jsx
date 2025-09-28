import products from '../data.json'
import ProductCart from './ProductCart';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
const Home = ({addToCart,removeCart}) => {
    const {cart,setCart} = useContext(CartContext)
    return (
        <div className="cart-container">
        <h2>Food Cart</h2>
          <div className="product-grid">
              {products.map((item) => (
                <ProductCart item={item} key={item.id} addToCart={addToCart} removeCart={removeCart} />
              ))}
          </div>
        </div>
    )
}

export default Home