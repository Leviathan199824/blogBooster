import React, { Component } from "react";

class Receta extends Component{
    render(){
        const receta = {
            nombre:"sopa",
            calorias:400,
            ingredientes:[ "agua","carne","tomate"]
        };
        return(
            <div>
                <ol>
                    {
                       receta.ingredientes.map((ingrediente,i)=>{
                         return(
                            <li key={i}>{ingrediente}</li>
                         )
                       }) 
                    }
                </ol>
            </div>
        )
    };
}
export default Receta;