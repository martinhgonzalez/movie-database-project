import React from "react";
class LoginForm extends React.Component {
  render() {
    return (
      <div>
        {/* Inputs */}
        <div className="row">
          <form className="col s12">
            {/* E-mail */}
            <div className="row">
              <div className="input-field col s6 ">
                <i className="material-icons prefix ">email</i>
                <input id="iemail" type="email" className="validate" />
                <label htmlFor="email">E-mail</label>
              </div>
            </div>
            {/* Alis */}
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input id="icon_prefix" type="text" className="validate" />
                <label htmlFor="icon_prefix">Alias</label>
              </div>
            </div>
            {/* Password */}
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">create</i>
                <input id="create" type="password" className="validate" />
                <label htmlFor="create">Password</label>
              </div>
            </div>
          </form>
        </div>
        <button
          className="btn waves-effect #0277bd light-blue darken-3"
          type="submit"
          name="action"
        ></button>
      </div>
    );
  }
}
export default LoginForm;
