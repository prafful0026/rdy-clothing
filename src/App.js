import './App.css';
import React from "react"
import Homepage from "./pages/homepage/homepage-component.jsx";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop-component.jsx";
import Header from "./components/header-component/header-component.jsx"
import  SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up-component.jsx"
import { auth,createUserProfileDocument } from "./firebase/firebase-utils.js";
class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    };
  }
  unSubscribeFromAuth=null;
  componentDidMount(){
  this.unSubscribeFromAuth=  auth.onAuthStateChanged(async user=>{createUserProfileDocument(user)})
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser} /> 
        <Switch>
          <Route exact path="/signin" component={ SignInAndSignUpPage}  />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
  
      </div>
  
  
    );
  }

}

export default App;
