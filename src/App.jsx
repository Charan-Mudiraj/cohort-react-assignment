import Profile from "./apps/1/Profile";
import BChanger from "./apps/2/BChanger";
import ParaGenerator from "./apps/4/ParaGenerator";
import GitHub from "./apps/5/GitHub";
import OTP from "./apps/6/OTP";
import { Switch, Router, Route } from "react-router-dom";
import Links from "./Links";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact Component={Links}></Route>
          <Route path="/1" Component={Profile}></Route>
          <Route path="/2" Component={BChanger}></Route>
          <Route path="/5" Component={ParaGenerator}></Route>
          <Route path="/6" Component={OTP}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
