import React from "react";
import LoginForm from "../Components/LoginForm";

class Login extends React.Component {
  render() {
    return (
      <div>
        <div>
          {/* Nav de bienvenida */}
          <div className="navbar-fixed">
            <nav>
              <div className="nav-wrapper #0277bd light-blue darken-3">
                <span className="brand-logo">WELCOME!</span>
              </div>
            </nav>
          </div>
        </div>
        <LoginForm />
      </div>
    );
  }
}
export default Login;
