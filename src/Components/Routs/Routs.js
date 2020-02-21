import React from "react";
import Login from "../../Pages/Login/Login";
import Admin from "../../Pages/Admin/Admin";
import User from "../../Pages/User/User";
import Signin from "../../Pages/Signin/Signin";
import "./routes.css";

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  withRouter,
  Redirect
} from "react-router-dom";

class Routs extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        {/* <BrowserRouter> */}
        {/* <Router>
                    <Switch>
                        <Route path='/user' component={User}/>
                        <Route path='/admin'  component={Admin}/>
                        <Route path='/login'  component={Login}/>
                    </Switch> */}
        {/* </BrowserRouter> */}
        <BrowserRouter>
          {/* <ul>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/admin">Admin</Link></li>
                            <li><Link to="/user">User</Link></li>
                        </ul> */}

          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/user" component={User} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signin" component={Signin} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Routs;
