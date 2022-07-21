import React from "react";
import Data from "../data.json"
/*Funções responsaveis por desenhar os componentes do grafico*/
function Barragrafico(props){

 const ganhos = Data.map((e)=>{
     const configuracaoBarra ={
         backgroundColor: '#ec755d',
         width:'30px',
         height:'',
         position: 'relative',
         borderRadius: '3px',
        }
        return(
         configuracaoBarra.height=e.amount,
         console.log(configuracaoBarra.height),
         console.log(e.day),
         <div className="mes" id={e.day} style={configuracaoBarra} value={e.amount}><p></p></div>
         )
 })
 /*Retorno de elementos na tela*/
 return(
    <div id='grafico'>
        {ganhos}
    </div>
 );
}
export default Barragrafico;