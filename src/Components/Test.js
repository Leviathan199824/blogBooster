import React from "react";
class Test extends React.Component {


    render() {
        const personas = [
            { nombre: "Ana", edad: 20 },
            { nombre: "Luis", edad: 17 },
            { nombre: "Carlos", edad: 25 }
        ];

        const mayores = personas.filter(p => p.edad >= 18);

        console.log(mayores);
        return (
            <h1>Hola soy un componente de prueba</h1>
        );
    }
}
export default Test;