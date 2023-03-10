import "./App.css";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route , Switch} from "react-router-dom";
import Test from "./components/Test";
import EmployeeList from "./components/EmployeeList";
import EmpCreate from "./components/EmpCreate";
import EmpDetails from "./components/EmpDetails";
import EmpEdit from "./components/EmpEdit";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignUp} ></Route>
      <Route exact path="/dashboard" component={EmployeeList} ></Route>
      <Route exact path="/employee/create" component={EmpCreate}></Route>
      <Route exact path="/employee/detail/:empid" component={EmpDetails}></Route>
      <Route exact path="/employee/edit/:empid" component={EmpEdit}></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
