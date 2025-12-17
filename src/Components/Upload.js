import React, { Component, useState } from "react";

class Upload extends Component {
    /*const[imagen, setImagen] = useState(null);*/
    state={
        imagen:null
    }
    handleImagen = (e) => {
        const archivo = e.target.files[0];
        this.setState({
            imagen: URL.createObjectURL(archivo)
        });
    };
    render() {
        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader">Upload Image</h1>
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={this.handleImagen} 
                    />

                    {this.state.imagen && (
                        <div>
                            <h3>Vista previa:</h3>
                            <img 
                                src={this.state.imagen} 
                                alt="preview" 
                                width="300" 
                            />
                        </div>
                    )}
                </section>
            </div>
        )
    };
}
export default Upload