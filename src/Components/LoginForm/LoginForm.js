import React from "react";
import './loginForm.css';

class LoginForm extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div>
        {/* Inputs */}

        <div className="row">
          <form className="columna" onSubmit={this.props.onSubmit}>
            <img src="https://icon-icons.com/icons2/933/PNG/128/round-account-button-with-user-inside_icon-icons.com_72596.png"></img>
            {/* E-mail */}
            <div className="row">
              <div className="input-field col s12   ">
                <i className="material-icons prefix ">email</i>
                
                <input type="email" name ="mail" className="validate" value={this.props.formLogin.mailUser} onChange={this.props.onChange} id="email"    />
                {/* <input type="text" name ="taskName" className="formLogin-control" value={this.props.formLogin.taskName} onChange={this.props.onChange}></input> */}

                <label htmlFor="email">E-mail</label>
              </div>
            </div>
            {/* Alis */}
            <div className="row">
              <div className="input-field col s6 ">
                <i className="material-icons prefix ">account_circle</i>
                <input id="icon_prefix" type="text" name="name" value={this.props.formLogin.nameUser} onChange={this.props.onChange} className="validate " />
                {/* <input type="text" name ="taskDescription" className="formLogin-control" value={this.props.formLogin.taskDescription} onChange={this.props.onChange}></input> */}

                <label htmlFor="icon_prefix ">Alias</label>
              </div>
            </div>
            {/* Password */}
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">lock_outline</i>
                <input id="create" type="password" name="pass"  value={this.props.formLogin.passUser} onChange={this.props.onChange} className="validate" />
                <label htmlFor="create">Password</label>
              </div>
            </div>
            <button className="btn waves-effect " type="submit" value='Submit' name="action">GO!</button>
          </form>
        </div>

      </div>
    );
  }
}
export default LoginForm;
