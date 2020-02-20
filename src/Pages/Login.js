import React from "react";
import LoginForm from "../Components/LoginForm";
import Routs from "../Components/Routs";
import {Route, Link, withRouter, Redirect } from 'react-router-dom';
import Admin from './Admin';
import User from './User';

class Login extends React.Component {
  constructor(){
    super();
    this.state ={
      formLogin: {mail: 'abc@hotmail.com', name:'abc', pass:'123' },
      login: false
    }
  }

  handleInputChange=(e)=>{
    const name = e.target.name;
    const value = e.target.value
    this.setState({
      [name]: value
    })
    
  }
  

  verify =(e)=>{
    e.preventDefault();
    if (true) 
      this.setState({
        login:true
      })

  }




  render() {
    if (this.state.login) {
      return <Redirect to={"/user"} />
    }
    return (
      <div>
        <div>
          {/* Nav de bienvenida */}
          <div className="navbar-fixed center-align">
            <nav>
              <div className="nav-wrapper #0277bd light-blue darken-3">
                <span className="brand-logo">HI!</span>
              </div>
            </nav>
          </div>
        </div>

        <LoginForm 
            onChange= {this.handleInputChange}
            onSubmit={this.verify}
            formLogin ={this.state.formLogin}
        />
        
                    
      </div>
    );
  }
}
export default Login;
