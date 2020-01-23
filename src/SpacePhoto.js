import React, {useState , useEffect} from "react";
import "./index.css";
import axios from "axios";
import SpaceCard from "./SpaceCard";
let date = "&date=2020-22-01"
export default function SpacePhoto(){
const [SpacePhoto, setSpacePhoto]= useState([]);
useEffect(() => {
  axios
  .get(`https://api.nasa.gov/planetary/apod?api_key=Bh4uz6MncALQvZhInyyYB656q6FHqLqXVFlyLaAf&date=${date}`)
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
   
   
         <SpaceCard title = { SpacePhoto.title} 
         date = { SpacePhoto.date} 
         explanation = { SpacePhoto.explanation} 
         spacePhoto = { SpacePhoto.url}
         spacePhotoHd =  { SpacePhoto.hdurl}
         copyright = { SpacePhoto.copyright} 
        />
  
    
    </div>
  ) 
 }
 
