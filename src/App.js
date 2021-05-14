import logo from './logo.svg';
import './App.css';
import "./styles/main.scss";
import { Route, Switch } from 'react-router';
import Home from './screens/home/Home';
import ProductDetail from './screens/productDetail/ProductDetail';
import Header from './components/complex_components/header/Header';



function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/product/:id" component={ProductDetail}/>
      </Switch>
    </div>
  );
}

export default App;
