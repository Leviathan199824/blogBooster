import React, { Component } from "react";
import '../assets/css/style.css'
import Pelicula from "./Pelicula";
class Article extends Component {
    state = {
        peliculas: [
            { nombre: "batman vs superman", duracion: "2:30", img: "https://m.media-amazon.com/images/I/71ZTwOC+RLL._SY445_.jpg" },
            { nombre: "gran torino", duracion: "1:30", img: "https://pics.filmaffinity.com/gran_torino-278262332-mmed.jpg" }
        ],
        favorita: null
    }

    check = (nombreF) => {
        this.setState({
            favorita: nombreF
        })
    }


    render() {
        const Style = {
            padding: '10px',
            color: 'black',
            background: 'green'
        };
        let fav;
        if (this.state.favorita) {
            fav = (
                <p style={Style}>
                    <strong>
                        {this.state.favorita}
                    </strong>
                </p>
            )
        } else {
            fav = (
                <p>
                    <strong>
                        No Hay Pelicula favorita
                    </strong>
                </p>
            )
        }
        return (
            <div className="center">
                <section id="content">
                    <h2 className="subheader">Últimos artículos</h2>

                    <div id="articles">
                        <h2 id="subheader">Mi Pelicula Favorita es :</h2>
                        {fav}

                        {
                            this.state.peliculas.map((pelicula, i) => {
                                return (
                                    <Pelicula key={i} pelicula={pelicula} check={this.check}></Pelicula>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        )
    };
}
export default Article