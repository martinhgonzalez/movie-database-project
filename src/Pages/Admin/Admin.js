import React from "react";
import MenuAddFromAPI from "../../Components/MenuAddFromAPI/MenuAddFromAPI";
import AddForm from "../../Components/addForm/AddForm";
import "./admin.css";

class Admin extends React.Component {
  constructor(){
    super();
    this.state={
      option:{value:''}
    }
  }
  render() {
    if(this.state.option)
    return (
      <>
        <h1 class="center-align">WELCOME ADMIN</h1>
        <h3 class="center-align"> ¿Qué desea hacer?</h3>
        <div class="divButtons">
          <button class="btn waves-effect waves-light #424242 grey darken-3" type="submit" name="action">Agregar desde API</button>
          <button class="btn waves-effect waves-light #424242 grey darken-3" type="submit" name="action">Agregar personalizada</button>
        </div>
        {/* <span className="waves-effect waves-light btn-large">
          <i className="material-icons left">attach_money</i>button
        </span>
        <span className="waves-effect waves-light btn-large">
          <i className="material-icons right">attach_money</i>button
        </span> */}
        <MenuAddFromAPI/>
        <AddForm />
      </>
    );
  }
}

export default Admin;
