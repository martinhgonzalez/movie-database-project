
import React from "react";
// import MenuAddFromAPI from "../Components/MenuAddFromAPI/MenuAddFromAPI";
// import AddForm from "../Components/addForm/AddForm";
import './signin.css';
import { Redirect, Link } from "react-router-dom";
import Login from '../Login/Login'



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
                <p class ='datos-incorrectos'>Los datos ingresados son incorrectos, intente nuevamente</p>
                <a class="backSignin waves-effect waves-light btn" onClick={this.verifyLog}>Volver al login</a>
            </>
        );
    }
}
export default Signin;


