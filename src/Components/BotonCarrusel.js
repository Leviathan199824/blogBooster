import React, { Component } from "react";

class BotonCarrusel extends Component {
    state = {
        imagenes: [
            "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0313%2Fr1143823_1296x729_16%2D9.jpg&w=920&h=518&scale=crop&cquality=80&location=origin&format=jpg",
            "https://cdn.bolivia.com/sdi/2025/04/12/el-club-bolivar-cumple-100-anos-desde-su-fundacion-1281720.jpg",
            "https://estaticos-futbol.unitel.bo/binrepository/1025x638/0c4/1024d427/none/419380222/NAOJ/bolivar-leyendas_101-11330240_20250306200925.jpg"
        ],
        index: 0,
        disable: true
    }

    next = () => { 
        if(!this.state.disable){
            return;
        } 
        this.setState({
            index: (this.state.index+1)%3,
            disable:false,
        });
        setTimeout(()=>{
            this.setState({
                disable:true,
            }); 
            console.log(this.state.disable);
        },3000)   
    }

    prev = () => {
        console.log("preb");
        if (this.state.index <= 0) {
            this.setState({
                index: 2
            });
        } else {
            this.setState({
                index: this.state.index - 1
            });
        }

    }
    render() {
        const p = {
            width: "400px",
            height: "300px",
            overflow: "hidden"
        };
        const m = {
            width: "100%",
            height: "80%",
            /*objectFit: "cover"**/
        };
        return (

            <div className="center">
                <section id="content">
                    <h1 className="subheader">Carrusel con botones</h1>
                    <div style={p}>
                        <img style={m}
                            src={this.state.imagenes.at(this.state.index)}
                            alt="Bolivar foto"
                        >
                        </img>
                        <div className="botoncitos">
                            <button onClick={this.prev}>ANTERIOR</button>
                            <button onClick={this.next} disable={!this.state.disable}>SIGUIENTE </button>
                        </div>
                    </div>


                </section>
            </div>
        )
    };
}
export default BotonCarrusel;