import "./App.css";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route , Switch} from "react-router-dom";
import Test from "./components/Test";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignUp} ></Route>
      <Route exact path="/about" component={Test} ></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
