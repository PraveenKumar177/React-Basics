import '../assets/css/Header.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const cart = useSelector(state=>state.cart.cart)
  
  // const cartCount = cart.length > 0 ? cart.length : 0
  const cartCount = cart.reduce((acc,item)=>acc + Number(item.qty),0)
  return (
    <header className="header">
      <Link to={'/home'}>
        <div className="logo">FOOD CART</div>
      </Link>
      <nav className="nav-links">
        <Link to={'/home'}>Home</Link>
        <div className="cart-link">
          <Link to={"/viewcart"}>View Cart</Link>
          <span className="cart-count">{cartCount}</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
