import React from "react";
import Data from "../data.json"
function Label(){
    //const {onLoad}= props
    const mes = Data.map((key)=>{
           return(
               <span className="mes" name={key.day}>{key.day}</span>
           )
       })
       return(
        <div id="label">
            {mes}
        </div>
       );
}
export default Label;