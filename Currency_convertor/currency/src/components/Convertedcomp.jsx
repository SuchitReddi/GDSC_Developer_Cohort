import React from "react";
import { useState } from "react";

function Convertedcomp(props){
    return(
        <div className="component">
            {/* <p>{props.name}</p> */}
            <input className="inputs" onChange={props.onCodeChange} placeholder="enter ISO code (INR for ex)"></input>
            <p className="para">Here is the converted value : {props.val}</p>
        </div>
    );
}

export default Convertedcomp;