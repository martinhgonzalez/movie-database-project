import React from "react";
import LoginForm from "../Components/LoginForm";
import Routs from "../Components/Routs";

class Login extends React.Component {
  constructor(){
    super();
    this.state ={
      formLogin: {mail: 'abc@mail.com', name:'abc', pass:123 },
    }
  }

  handleInputChange=(e)=>{
    const name = e.target.name;
    const value = e.target.value
    this.setState({
      [name]: value
    })
    
  }
  

  show =(e)=>{
    e.preventDefault();
    console.log('State: ', this.state);
  }


  render() {
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
            onSubmit={this.show}
            formLogin ={this.state.formLogin}
        />
        
        <button> RUTEO</button>
        <Routs formLogin={this.state.formLogin}/>
      </div>
    );
  }
}
export default Login;
