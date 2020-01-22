import React from "react";
import "./App.css";
import SpacePhoto from "./SpacePhoto";


function App() {
 
  
     return (
    <div className ="App">
      <div className="logo_container">
      <img className="logo" src={""} alt= "Space Logo"/>
      <h1>API</h1>
      <SpacePhoto/>
      </div>
    </div>
     );
}

export default App;
