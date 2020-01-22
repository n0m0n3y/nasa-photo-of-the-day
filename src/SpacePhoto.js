import React, {useState , useEffect} from "react";
import "./index.css";
import axios from "axios";
import SpaceCard from "./SpaceCard";
export default function SpacePhoto(){
const [spacePhoto, setSpacePhoto]= useState([]);
useEffect(() => {
  axios
  .get("https://api.nasa.gov/planetary/apod?api_key=Bh4uz6MncALQvZhInyyYB656q6FHqLqXVFlyLaAf")
  .then(responce => {
    setSpacePhoto(responce.data);
    console.log(responce.data);
  })
  .catch(error => {
    console.log("Something is wrong ",error);
  });
},[]);
  return (
    <div className ="App">
    {spacePhoto.map(space => {
    return(
        <SpaceCard title={space.data.title} 
                    date={space.data.date} 
                    explanation={space.data.explanation} 
                    spacePhoto={space.data.url}  
                    copyright={space.data.copyright} 
        />
    );
    })}
    </div>
  );
}
