import React from 'react'

const Location = ({ city }) => { // Object Destructuring
    //const city = props.city // => asignacion de variable normal
    //const { city } = props // => Destructuring // funciona si la propiedad y el nombre de la variable son iguales.
    return (
        <div>
            <h1>{city}</h1>
        </div>
    )
}

export default Location