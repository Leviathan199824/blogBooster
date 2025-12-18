import React, { Component } from "react";

class Pelicula extends Component {
    marcar = (nombre)=>{
        this.props.check(nombre)
    }
    render() {
        const  {nombre, duracion, img} = this.props.pelicula;
    
        return (
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={img} alt="Paisaje" />
                </div>

                <h2>{nombre}</h2>
                <span className="date">
                    duracion {duracion}
                </span>
                <a href="#">Leer más</a>
                <button className="btn  btn-sm  btn-success " onClick={()=> {this.marcar(nombre)}}>Marcar como favorito</button>
                <div className="clearfix"></div>
            </article>
        )
    }
}
export default Pelicula