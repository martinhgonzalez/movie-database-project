import React from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";
import { Redirect } from "react-router-dom";
import { getUsersArray } from "../../Services/Users";
import "./login.css";
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      formLogin: { mail: "", pass: "" },
      login: false,
      arrayUser: []
    };
  }

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      formLogin: {
        ...this.state.formLogin,
        [name]: value
      }
    });
  };

  verify = e => {
    getUsersArray()
      .then(users => {
        this.setState({
          arrayUser: users
        });
      })
      .catch(error => console.log(error));

    if (true)
      this.setState({
        login: true
      });
  };

  //VERIFICAR CON EQUALS
  render() {
    // console.log(this.state.formLogin.name);
    if (this.state.login) {
      if (
        this.state.formLogin.mail === "admin@admin.com" &&
        this.state.formLogin.pass === "admin"
      ) {
        return <Redirect to={"/admin"} />;
      } else if (
        this.state.formLogin.mail === "user@user.com" &&
        this.state.formLogin.pass === "user"
      ) {
        return <Redirect to={"/user"} />;
      } else if (
        this.state.formLogin.mail === "jazmin@user.com" &&
        this.state.formLogin.pass === "jazmin"
      ) {
        return <Redirect to={"/user"} />;
      } else if (
        this.state.formLogin.mail === "martin@admin.com" &&
        this.state.formLogin.pass === "martin"
      ) {
        return <Redirect to={"/admin"} />;
      } else {
        return <Redirect to={"/signin"} />;
      }
    }

    return (
      <div>
        <div>
          {/* Nav de bienvenida */}
          <div className="navbar-fixed center-align">
            <nav>
              <div className="nav-wrapper">
                <span className="h1login brand-logo">Movies</span>
              </div>
            </nav>
          </div>
        </div>

        <LoginForm
          onChange={this.handleInputChange}
          onSubmit={this.verify}
          formLogin={this.state.formLogin}
        />
      </div>
    );
  }
}
export default Login;
