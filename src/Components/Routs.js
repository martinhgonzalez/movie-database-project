import React from "react";
import Login from "../Pages/Login";
import {BrowserRouter, Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import Admin from '../Pages/Admin';
import User from '../Pages/User';

class Routs extends React.Component {
    constructor(){
        super();
        
    }
        render(){
            return(
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
                        <ul>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/admin">Admin</Link></li>
                            <li><Link to="/user">User</Link></li>
                        </ul>

                
                        <Switch>
                            <Route path='/user'>
                                <User/>
                            </Route>
                            <Route path='/admin'  component={Admin}/>
                            <Route path='/login'  component={Login}/>
                        </Switch>
                    </BrowserRouter>
                </>
        )
    }
}


export default Routs;