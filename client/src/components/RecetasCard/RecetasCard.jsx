
import React from "react";

export default function RecetasCard({name, dietas, imagen, id}){
    return ( <div>
        <h2>{name}</h2>
        <h3>{dietas}</h3>
        <img src={imagen} alt="" />
    </div>)
}
