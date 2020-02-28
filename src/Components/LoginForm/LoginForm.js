import React from "react";
import "./loginForm.css";

class LoginForm extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        {/* Inputs */}

        <div className="row">
          <form className="columna" onSubmit={this.props.onSubmit}>
            <img
              className="userImg"
              src="https://cdn2.iconfinder.com/data/icons/user-icon-2-1/100/user_5-15-512.png"
              alt="img"
            ></img>
            {/* E-mail */}
            <div className="row">
              <div className="input-field col s12   ">
                <i className="material-icons prefix ">email</i>

                <input
                  type="email"
                  name="mail"
                  className="validate"
                  value={this.props.formLogin.mailUser}
                  onChange={this.props.onChange}
                  id="email"
                />
                {/* <input type="text" name ="taskName" className="formLogin-control" value={this.props.formLogin.taskName} onChange={this.props.onChange}></input> */}

                <label htmlFor="email">E-mail</label>
              </div>
            </div>

            {/* Password */}
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">lock_outline</i>
                <input
                  id="create"
                  type="password"
                  name="pass"
                  value={this.props.formLogin.passUser}
                  onChange={this.props.onChange}
                  className="validate"
                />
                <label htmlFor="create">Password</label>
              </div>
            </div>
            <button
              className="btn btnLogin waves-effect "
              type="submit"
              value="Submit"
              name="action"
            >
              GO!
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default LoginForm;
