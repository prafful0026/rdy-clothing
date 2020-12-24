import './App.css';
import Homepage from "./pages/homepage/homepage-component.jsx";
import { Route, Switch } from "react-router-dom";

const hats = () => {
  return (
    <h1>
      hats page
    </h1>
  )

}
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/hats" component={hats} />
        <Route exact path="/" component={Homepage} />
      </Switch>

    </div>


  );
}

export default App;
