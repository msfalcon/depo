import React from "react";
import Card from "./contact";
function createcard(info)
{
    return(
        <Card 
        name={info.name}
        img={info.img}
        tel={info.tel}
        address={info.address}
        />
    );
}
export default createcard;