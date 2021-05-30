// import logo from './logo.svg';
import './App.css';
import "./styles/main.scss";
import { Route, Switch } from 'react-router';
import Home from './screens/home/Home';
import ProductDetail from './screens/productDetail/ProductDetail';
import Header from './components/complex_components/header/Header';
import Cart from './screens/cart/Cart';
import User from './screens/user/User';
import Logout from './screens/logout/Logout';
import { createContext, useState } from 'react';

export const CartContext = createContext(0);

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="App">
      <CartContext.Provider value={[cartItems, setCartItems]}>
        <Header/>
        <Switch>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/user" component={User}/>
          <Route exact path="/logout" component={Logout}/>
          <Route exact path="/product/:id" component={ProductDetail}/>
        </Switch>
      </CartContext.Provider>
    </div>
  );
}

export default App;
