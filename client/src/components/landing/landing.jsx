
import React from "react";
import { Link } from "react-router-dom";

export default function Landing(){
    return ( <div>
        <h1>Bienvenidos a Recetas Henry</h1>
        <Link to = "/home">
            <button>Haga Click para ingresar</button>
        </Link>
    </div>)
}