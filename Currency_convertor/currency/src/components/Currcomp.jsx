import React from "react";
import { useState } from "react";

function Currcomp(props){
    return(
        <div className="component">
            {/* <p>{props.name}</p> */}
            <input className="inputs" onChange={props.onCodeChange} placeholder="enter ISO code (INR for ex)"></input>
            <input className="inputs" onChange={props.onEnterValue} placeholder="enter the value"></input>
        </div>
    );
}

export default Currcomp;