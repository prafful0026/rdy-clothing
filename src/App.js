import './App.css';
import Homepage from "./pages/homepage/homepage-component.jsx";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop-component.jsx";
import Header from "./components/header-component/header-component.jsx"
function App() {
  return (
    <div>
      <Header /> 
      <Switch> 
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>

    </div>


  );
}

export default App;
