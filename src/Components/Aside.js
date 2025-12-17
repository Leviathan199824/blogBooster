import React, { Component } from "react";
import '../assets/css/style.css'
class Aside extends Component {
    state={
        estado:true
    }
    test=(e)=>{
        e.preventDefault();
        /*e.preventDefault();*/
        console.log("----");
        this.setState({
            estado:false
        });
        setTimeout(()=>{
            this.setState({
                estado:true
            });
        },3000);
    }
    render() {
        return (
            <div className="center">
                <aside id="sidebar">
                    <div id="nav-blog" className="sidebar-item">
                        <h3>Puedes hacer esto</h3>
                        <a href="#" className="btn btn-success">Crear artículo</a>
                    </div>

                    <div id="search" className="sidebar-item">
                        <h3>Buscador</h3>
                        <p>Encuentra el artículo que buscas</p>
                        <form  onSubmit={this.test} >
                            <input type="text" name="search" />
                            <input type="submit" name="submit" value="Buscar" className="btn" 
                            disabled={!this.state.estado}/>
                        </form>
                    </div>
                </aside>
                <div className="clearfix"></div>
            </div>
        )
    };
}
export default Aside;