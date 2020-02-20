import React from "react";
import './menuAddFromAppi.css';

class MenuAddFromAPI extends React.Component {
  render() {
    return (
      <>
      <ul>
        <li className="waves-effect waves-light btn-small">Button</li>
        <li className="waves-effect waves-light btn-small">
          <i className="material-icons left">cloud</i>button
        </li>
        <li className="waves-effect waves-light btn-small">
          <i className="material-icons right">cloud</i>button
        </li>
</ul>
      </>

    );
  }
}

export default MenuAddFromAPI;
