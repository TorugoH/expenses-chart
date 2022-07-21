import React from "react";
import imagens from"../images/logo.svg";
console.log(imagens)
function Titulo(props){
    const {id,onClick,className}=props
    return(
        <header className={className}>
            <h5>My Balance</h5>
            <p id="saldo">$ 921.48</p>
            <img id="logo"src={imagens}></img>
            
        </header>
    );
}
export default Titulo