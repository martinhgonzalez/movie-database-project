import React from "react";
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
            <img src="https://icon-icons.com/icons2/1288/PNG/128/1499345621-contact_85338.png"></img>
            {/* E-mail */}
            <div className="row">
              <div className="input-field col s6 ">
                <i className="material-icons prefix ">email</i>
                
                <input type="email" name ="mailUser" className="validate" value={this.props.formLogin.mailUser} onChange={this.props.onChange} id="email"    />
                {/* <input type="text" name ="taskName" className="formLogin-control" value={this.props.formLogin.taskName} onChange={this.props.onChange}></input> */}

                <label htmlFor="email">E-mail</label>
              </div>
            </div>
            {/* Alis */}
            <div className="row">
              <div className="input-field col s6 ">
                <i className="material-icons prefix ">account_circle</i>
                <input id="icon_prefix" type="text" name="nameUser" value={this.props.formLogin.nameUser} onChange={this.props.onChange} className="validate " />
                {/* <input type="text" name ="taskDescription" className="formLogin-control" value={this.props.formLogin.taskDescription} onChange={this.props.onChange}></input> */}

                <label htmlFor="icon_prefix ">Alias</label>
              </div>
            </div>
            {/* Password */}
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">create</i>
                <input id="create" type="password" name="passUser"  value={this.props.formLogin.passUser} onChange={this.props.onChange} className="validate" />
                <label htmlFor="create">Password</label>
              </div>
            </div>
            <button className="btn waves-effect #0277bd light-blue darken-3" type="submit" value='Submit' name="action">GO!</button>
          </form>
        </div>

      </div>
    );
  }
}
export default LoginForm;
