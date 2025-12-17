import React, { Component } from "react";
import '../assets/css/style.css'
import react from '../assets/img/react.svg';
import { NavLink } from "react-router-dom";
class Cabecera extends Component {
    render(){
        return (
           <header id="header">
                <div className="center">
                    <div id="logo">
                        <img src={react} className="app-logo" alt="golo" />
                        <span id="brand">
                            <strong>Ghost</strong> Boster
                        </span>
                    </div>
                    
                    <nav id="menu">
                        <ul>
                            <li>
                                <NavLink to="/" className={({isActive}) => isActive ? "active":""}>Inicio</NavLink>
                            </li>
                            <li>
                                <NavLink to="prueba-exs">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="formulario">Formulario</NavLink>
                            </li>
                            <li>
                                <NavLink to="upload">Subir Imagen</NavLink>
                            </li>
                             <li>
                                <NavLink to="*">Pagina 2</NavLink>
                            </li>                  
                        </ul>
                    </nav>
                    <div className="clearfix"></div>
                </div>
            </header> 
        )
    }
}
export default Cabecera