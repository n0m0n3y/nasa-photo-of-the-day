import React from "react";
import { Card,  CardImg, CardBody,
    CardTitle, CardText } from 'reactstrap';


 const SpaceCard = props =>{
//     console.log(props.title)
     return (
//         <div className= "space">
        
        
//          <h3>Title of photo:</h3><p>{props.title}</p>
//          <h3>Date:</h3> <p>{props.date}</p>
//        <h3> Explanation:</h3>  <p>{ props.explanation}</p>
//         <img src= {props.spacePhoto} alt ="NASA stuff"></img>
//        <h3> Image Credit & Copyright:</h3> <p>{props.copyright}</p>
//         </div>
//     )
// }


<Card>
      <CardTitle className="title">Title of photo: {props.title}</CardTitle>
      <CardImg top width="80%" src={props.spacePhotoHd} alt="Space image" />
      <CardBody>
        <CardText className='explain'>Explanation:{props.explanation}</CardText>
        <CardText>Image Credit & Copyright:{props.copyright}</CardText>
        <CardText>Date: {props.date}</CardText>

      </CardBody>
    </Card>
  )
};

export default SpaceCard;