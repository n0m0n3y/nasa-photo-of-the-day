import React from "react";
//import SpacePhoto from "./SpacePhoto";


const SpaceCard = props =>{
    return (
        <div className= "space">
        <h2>Title:{props.data.title}</h2>
        <p>
         {""}
         Date:{props.data.date}</p>
        <p>Explanation:{props.data.explanation}</p>
        <div>{props.data.url}</div>
        <p>Copyright: {props.data.copyright}</p>
        </div>
    )
}

export default SpaceCard;