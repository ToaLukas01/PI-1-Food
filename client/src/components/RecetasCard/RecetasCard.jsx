
import React from "react";

export default function RecetasCard({name, dietas, imagen, id}){
    return (<div>
        {/* key={id} */}
        <div>
            <h2>{name}</h2>
        </div>
        <div>
            {dietas.length && dietas.map(d=>{return(<h4>Tipos de Dietas: {d}</h4>)})}
        </div>
        <div>
            <img src={imagen} alt="Imagen NO disponible" width="300px" height="300px" />
        </div>
    </div>)
}
