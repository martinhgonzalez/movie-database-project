import React from "react";
import MenuAddFromAPI from "../Components/MenuAddFromAPI";
import AddForm from "../Components/AddForm";

class Admin extends React.Component {
  render() {
    return (
      <>
        <h1>WELCOME ADMIN</h1>
        <span className="waves-effect waves-light btn-large">
          <i className="material-icons left">attach_money</i>button
        </span>
        <span className="waves-effect waves-light btn-large">
          <i className="material-icons right">attach_money</i>button
        </span>
        <MenuAddFromAPI />
        <AddForm />
      </>
    );
  }
}

export default Admin;
