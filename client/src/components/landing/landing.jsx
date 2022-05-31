
import React from "react";
import { Link } from "react-router-dom";
import estilos from "./Landing.module.css"

export default function Landing(){
    return ( <div className={estilos.background}>
        <h1>Bienvenidos a Recetas Henry</h1>
        <Link to = "/home">
            <button>Haga Click para ingresar</button>
        </Link>
    </div>)
}