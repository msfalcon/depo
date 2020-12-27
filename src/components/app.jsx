import React from "react";
import Footer from "./footer";
import Avataar from "./avatar";
import Avatar from "../images/shahbaz-avatar.jpg";
import info from "./info";
import createcard from "./cardtemp";

function App()
{
    return (
        <div >
        <h1 className="title_heading">CONTACTS</h1>
        <Avataar img={Avatar}/>
        {info.map(createcard)}
       
        <Footer />
        </div>
    );

}
export default App;