import React from "react";
//import SpacePhoto from "./SpacePhoto";


const SpaceCard = props =>{
    return (
        <div className= "space">
        
        
         
         <h3>Date:</h3> <p>{props.date}</p>
       <h3> Explanation:</h3>  <p>{ props.explanation}</p>
        <img src= {props.spacePhoto} alt ="NASA stuff"></img>
       <h3> Copyright:</h3> <p>{props.copyright}</p>
        </div>
    )
}

export default SpaceCard;