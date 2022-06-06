
import React from "react";
import estilos from "./RecetasCard.module.css";

export default function RecetasCard({name, dietas, imagen, id}){
    return(
        <React.Fragment>
            <div className={estilos.background} key = {id}>
                <h2  className={estilos.titulo}>{name}</h2>
                 {dietas[0]?.name? dietas.map(d => <span className={estilos.dietas}>{d.name}</span>) : dietas.map(d => <span className={estilos.dietas}>{ d + " "}</span>)}
                {/* { dietas.map(d => <h4>{ d + " "}</h4>)} */}
                <img className={estilos.imagen} src={imagen} alt="Imagen NO disponible" width="200px" height="200px" />
            </div>
        </React.Fragment>
    )
}
