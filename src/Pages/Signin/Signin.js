import React from "react";
import "./signin.css";
import { Redirect } from "react-router-dom";

class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      login: false
    };
  }
  ver = () => {
    this.setState({
      login: true
    });
  };
  render() {
    if (this.state.login) {
      return <Redirect to={"/login"} />;
    }

    return (
      <>
        <p className="datos-incorrectos">
          Los datos ingresados son incorrectos, intente nuevamente
        </p>

        <button className="waves-effect waves-light btn" onClick={this.ver}>
          Volver al login
        </button>
      </>
    );
  }
}
export default Signin;

// import React from "react";
// ;

// const  Signin= () => {
//     return (
//         <>

//         <h1>NOPE</h1>
//               <nav class="nav-extended">
//     <div class="nav-wrapper">
//       <a href="#!" class="brand-logo">Logo</a>
//       <ul class="right hide-on-med-and-down">
//         <li><a>A link</a></li>
//         <li><a>A second link</a></li>
//         <li><a>A third link</a></li>
//       </ul>
//     </div>
//     <div class="nav-content">
//       <span class="nav-title">Title</span>
//       <a class="btn-floating btn-large halfway-fab waves-effect waves-light teal">
//         <i class="material-icons">add</i>
//       </a>
//     </div>
//   </nav>
//         </>
//      );
// }

// export default Signin ;
