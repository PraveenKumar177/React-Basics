import products from '../data.json'
import ProductCart from './ProductCart';
const Home = () => {

    return (
        <div className="cart-container">
        <h2>Food Cart</h2>
          <div className="product-grid">
              {products.map((item) => (
                <ProductCart item={item} key={item.id}/>
              ))}
          </div>
        </div>
    )
}

export default Home