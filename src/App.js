import React from "react";
import "./App.css";
import SpacePhoto from "./SpacePhoto";
//import { Button } from 'reactstrap'






function App() {
 
  
     return (
    <div className ="App">
      <div className="logo_container">
      <img className="logo" src= "/img/nasablack.png" alt= "Space Logo"/>
      <h1>Welcome to my NASA Photo of the day page</h1>
      <h2>Im Pulling a Photo of the day from the NASA API</h2>
       <SpacePhoto/>
      </div>
    </div>
    );
}

export default App;
