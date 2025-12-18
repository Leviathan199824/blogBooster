import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
//importacion de componentes
import Cabecera from './Components/Cabecera';
import Footer from './Components/Footer';
import Slider from './Components/Slider';
import Aside from './Components/Aside';
import Pruebas from "./Components/Pruebas";
import Article from "./Components/Article";
import Formulario from "./Components/Formulario";
import Upload from "./Components/Upload";
import Error from "./Components/Error";

import RoleRoute from "./Components/RoleRoute";
import NoAutorizado from "./Components/NoAutorizado";
import Login from "./Components/Login";
import HomeAdmin from "./Components/HomeAdmin";
import BotonCarrusel from "./Components/BotonCarrusel";
class Router extends Component {
    render() {
        return (
            <div >
                <Cabecera></Cabecera>
                <Slider></Slider>
                     
                <Routes>
                    {/*<Route path="/" element={<Article />} />*/}
                    <Route path="/" element={<Login />} />
                    <Route
                        path="/admin"
                        element={
                            <RoleRoute roles={["admin"]}>
                              <HomeAdmin />
                            </RoleRoute>
                        }
                    />
                    <Route
                        path="/user"
                        element={
                            <RoleRoute roles={["normal"]}>
                                
                                  <Article />
                            </RoleRoute>
                        }
                    />
                    <Route path="/prueba-exs" element={<Pruebas />} />
                    <Route path="/formulario" element={<Formulario />} />
                    <Route path="/upload" element={<Upload />} />
                    <Route path="/botoncarrusel" element={<BotonCarrusel />} />
                    <Route path="/no-autorizado" element={<NoAutorizado />} />
                    <Route path="*" element={<Error />}></Route>
                </Routes>
                <Aside></Aside>
                <div className="clearfix"></div>
                <Footer></Footer>
            </div>
        );
    }
}
export default Router;