import React, { Component } from "react";

class Pruebas extends Component {
    state = {
        numero: 0,
        autor: "andres",
        flag: true,
        ingredientes: ["awa", "papa", "tomate"],
        activo: true,
        hidden: true,
        par: 0
    }
    aumentar = () => {
        this.setState({
            numero: this.state.numero + 1
        });
    }
    restar = () => {
        this.setState({
            numero: this.state.numero - 1
        })
    }
    change = () => {
        this.setState({
            flag: !this.state.flag
        });
        console.log(this.state.flag)
        if (this.state.flag) {
            this.setState({
                autor: "andres"
            });
        } else {
            this.setState({
                autor: "miguel"
            });
        }

    }
    add = () => {
        this.setState({
            ingredientes: [...this.state.ingredientes, "coca cola"]
        })
    }
    color = () => {
        this.setState({
            activo: !this.state.activo
        })
    }

    ocultar = () => {
        this.setState({
            hidden: !this.state.hidden
        })
    }
    odd = () => {
        this.setState({
            par: this.state.par + 2
        })
    }
    render() {
        return (
            <div className="center">
                <div id="content" className={this.state.activo ? "redBg" : "blueBg"}>
                    <p>{this.state.numero}</p>
                    <p>{this.state.autor}</p>
                    <p>{this.state.autor}</p>
                    <ol>
                        {
                            this.state.ingredientes.map((ingrediente, i) => {
                                return (

                                    <li key={i}>{ingrediente}</li>
                                )
                            })
                        }

                    </ol>
                    <button onClick={this.change}>change</button>
                    <button onClick={this.aumentar}>sumar</button>
                    <button onClick={this.restar}>restar</button>
                    <button onClick={this.add}>add</button>
                    <button onClick={this.color}>background</button>
                    <div className={this.state.hidden ? "yes" : "no"}> ahora me ves xd</div>
                    <button onClick={this.ocultar}>ocultar</button>
                    <div>{this.state.par}</div>
                    <button onClick={this.odd}>par</button>
                </div>
            </div>
        );
    }
}
export default Pruebas