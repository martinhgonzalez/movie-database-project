import React from "react";
import Admin from "./Pages/Admin/Admin";
import Login from "./Pages/Login/Login";
import User from "./Pages/User/User";
import Routs from "./Components/Routs/Routs";
import {Redirect, Router} from 'react-router-dom';


function App() {

  return (
    <div>
      {/* <User /> */}
      {/* <Admin /> */}
      {/* <CardContainer /> */}
      {/* <Nav/> */}
      
      
      
      <Routs/>
    

    </div>
  );
}

export default App;

