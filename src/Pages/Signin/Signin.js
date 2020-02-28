import React from "react";
import "./signin.css";
import { Redirect } from "react-router-dom";

class Signin extends React.Component {
  constructor(){
        super();
        this.state ={
            login: false, 
        }
    }
    verifyLog=()=>{
        this.setState({
            login:true
        })
    }

    render() { 
        if(this.state.login){
            return<Redirect to ={"/login"}/>
        };
        return (
            <>
                <p className ='datos-incorrectos'>Los datos ingresados son incorrectos, intente nuevamente</p>
                <a className="backSignin waves-effect waves-light btn" onClick={this.verifyLog}>Volver al login</a>
            </>
        );
    }
}
export default Signin;

