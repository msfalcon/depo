import React from "react";
import Paragraph from "./paragraph";
function Card(props)
{
    return(
        <div className="box_color">
        <div className="top_div">
        <h1 className="heading_card">{props.name}</h1>
        <img className="pic" src={props.img} alt="picture1-crashed"/>
        </div>
         
         
         <div className="bottom_div">
         <Paragraph detail={props.tel} />
         <Paragraph detail={props.address} />
         </div>

        </div>
    );
   
}
export default Card;