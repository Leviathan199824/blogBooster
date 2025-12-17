import React, { Component} from "react";
import { useRef } from "react";

class Formulario extends Component {
    
    nombreRef = React.createRef();
    apellidoRef = React.createRef();
    bioRef = React.createRef();
    hombreRef = React.createRef();
    mujerRef = React.createRef();
    otroRef = React.createRef();
    nacimiento = React.createRef();

    state = {
        user:{
            nombre:null,
            apellido:null,
            biografia:null,
            nacimiento:null,
            genero:null
        }
        
    }
    captura =(e)=>{
        e.preventDefault();
        let gen;
        if(this.hombreRef.current.value){
            gen="hombre";
        }else if(this.mujerRef.current.value){
            gen="mujer";
        }else{
            gen="otro";
        }
        this.setState({
            user:{
                nombre:this.nombreRef.current.value,
                apellido:this.apellidoRef.current.value,
                biografia:this.bioRef.current.value,
                nacimiento: 2025 - parseInt(this.nacimiento.current.value),
                genero:gen
            }
            
        })
        /*console.log("---");
        console.log("Nombre:", );
        console.log("Apellido:", this.apellidoRef.current.value);
        console.log("Bio:", this.bioRef.current.value);*/

    }
    render() {
        const s = {
            background: "red"
        }
        const ss = {
            background: "yellow"
        }
        const sss = {
            background: "green"
        }
        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader">Formulario</h1>
                    <p>
                        Nombre: {this.state.user.nombre} 
                    </p>
                    <p>
                        Apellido: {this.state.user.apellido}
                    </p>
                    <p>
                        bio: {this.state.user.biografia}
                    </p>
                    <p>
                        Genero: {this.state.user.genero}
                    </p>
                    {this.state.user.nacimiento && this.state.user.nacimiento >= 18 &&
                        <p style={s}>Usted es Mayor de edad y tiene { (this.state.user.nacimiento )} años </p>
                    }
                    {this.state.user.nacimiento && this.state.user.nacimiento >=1 && this.state.user.nacimiento <= 10 &&
                        <p style={ss}>Usted es Menor de edad y tiene { (this.state.user.nacimiento )} años </p>
                    }
                    {this.state.user.nacimiento && this.state.user.nacimiento >10 && this.state.user.nacimiento < 18 &&
                        <p style={sss}>Usted es casi es mayor de edad y tiene { (this.state.user.nacimiento )} años </p>
                    }
                    <form className="mid-form" onSubmit={this.captura} >
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" name="nombre" ref={this.nombreRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nombre">Año de Nacimiento</label>
                            <input type="number" name="naci" ref={this.nacimiento} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="apellidos">Apellidos</label>
                            <input type="text" name="apellidos" ref={this.apellidoRef} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="bio">Biografia</label>
                            <textarea className="bio" ref={this.bioRef}></textarea>
                        </div>

                        <div className="form-group radibuttons">
                            <input type="radio" name="genero" value="hombre" ref={this.hombreRef} /> Hombre
                            <input type="radio" name="genero" value="mujer" ref={this.mujerRef}/> Mujer
                            <input type="radio" name="genero" value="otro" ref={this.otroRef}/> Otro
                        </div>

                        <div className="clearfix"></div>

                        <input type="submit" value="Enviar" className="btn btn-success" />

                    </form>
                </section>
            </div>

        )
    };
}
export default Formulario;