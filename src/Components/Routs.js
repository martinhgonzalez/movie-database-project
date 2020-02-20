import React from "react";
import Login from "../Pages/Login";
import {BrowserRouter as Router, Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import Admin from '../Pages/Admin';
import User from '../Pages/User';

// class Routs extends React.Component {
//     constructor(props){
//         super(props);
//         console.log('HEREDAMOS', props);
//     }   

//     render() {
//         return (
//             <><h1>HIKA</h1></>
//     );
//     }
// }
const Routs = (props) => {
    const{history} = props;
    return(
<><Router>
        <button onClick={()=>history.push('/Admin')}>SETTINGS</button>
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/admin">Admin</Link>
                </li>
                <li>
                    <Link to="/user">User</Link>
                </li>
            </ul>
            </Router>
</>
    );

        
};


export default Routs;