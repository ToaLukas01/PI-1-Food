
import React from "react";
import MostrarRecetas from "../RecetasCard/RecetasCard";
import { useSelector } from "react-redux";

export default function DetalleReceta(){
    const recetas = useSelector( ( state ) => state.allRecipes)
    return ( <div>
        {
        recetas?.map( r => {
             return (<div>
                 <MostrarRecetas name={r.name} dietas={r.dietas} imagen={r.imagen} key={r.id}/>
             </div>

             )
            })
    }
    </div>)
}