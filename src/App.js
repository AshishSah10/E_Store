import logo from './logo.svg';
import './App.css';
import "./styles/main.scss";
import { Route, Switch } from 'react-router';
import Home from './screens/home/Home';
import ProductDetail from './screens/productDetail/ProductDetail';
import Header from './components/complex_components/header/Header';
import Cart from './screens/cart/Cart';
import User from './screens/user/User';
import Logout from './screens/logout/Logout';



function App() {
  const initializeCart = () => {
    sessionStorage.setItem("countCartProduct",0)
  }
  initializeCart()
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/user" component={User}/>
        <Route exact path="/logout" component={Logout}/>
        <Route exact path="/product/:id" component={ProductDetail}/>
      </Switch>
    </div>
  );
}

export default App;
