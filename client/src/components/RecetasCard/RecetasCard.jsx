
import React from "react";
import estilos from "./RecetasCard.module.css";

export default function RecetasCard({name, dietas, imagen, id}){
    return(
        <React.Fragment>
            <div className={estilos.background} key = {id}>
                <h2>{name}</h2>
                 {dietas[0]?.name? dietas.map(d => <h4>{d.name}</h4>) : dietas.map(d => <h4>{ d + " "}</h4>)}
                {/* { dietas.map(d => <h4>{ d + " "}</h4>)} */}
                <img src={imagen} alt="Imagen NO disponible" width="300px" height="300px" />
            </div>
        </React.Fragment>
    )
}
