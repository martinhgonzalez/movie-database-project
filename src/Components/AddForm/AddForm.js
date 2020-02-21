import React from "react";
import "./addForm.css";

class AddForm extends React.Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="input-field col s6">
            <input value="" id="first_name2" type="text" className="validate" />
            <label className="active" htmlFor="first_name2">
              Title
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input value="" id="first_name2" type="text" className="validate" />
            <label className="active" htmlFor="first_name2">
              Image
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="first_name2" value="" type="text" className="validate" />
            <label className="active" htmlFor="first_name2">
              Release Date
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="first_name2" type="text" className="validate" />
            <label className="active" htmlFor="first_name2">
              id
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s6">
            <input id="first_name2" value="" type="text" className="validate" />
            <label className="active" htmlFor="first_name2">
              genres //insert a multiple select here
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="first_name2" type="text" className="validate" />
            <label className="active" htmlFor="first_name2">
              Img Url
            </label>
          </div>
        </div>
      </>
    );
  }
}

export default AddForm;
