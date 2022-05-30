
import React from "react";
import RecetasCard from "../RecetasCard/RecetasCard";
import { useSelector } from "react-redux";

export default function RecetasDetail(){
    const recetas = useSelector( ( state ) => state.allRecetas)
    return ( <div>
        {
        recetas?.map( r => {
             return (<div>
                 <RecetasCard name={r.name} dietas={r.dietas} imagen={r.imagen} key={r.id}/>
             </div>

             )
            })
    }
    </div>)
}