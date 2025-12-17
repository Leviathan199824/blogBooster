import React, { useEffect, useState } from "react";
import '../assets/css/style.css'
const Carrusel = () => {
    const imagenes = [
        "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
        "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg",
        "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg"
    ];

    const [indice, setIndice] = useState(0);
    const ahora = new Date();

    const fecha = ahora.toLocaleDateString("es-BO", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });

    const hora = ahora.toLocaleTimeString("es-BO", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });


    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndice((prev) => (prev + 1) % imagenes.length);
            //console.log(fecha, hora);
            //porsiacaso  en caso nos pida trabajar con formato de tiempo y hora
        }, 3000); // 3 segundos
        
        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className="carrusel">
            <img
                src={imagenes[indice]}
                alt="slide"
                className="carrusel-img"
            />
        </div>
    );
};

export default Carrusel;