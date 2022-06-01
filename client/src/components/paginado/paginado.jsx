
import React from "react";

export default function Paginado({recetasPorPagina, allRecetas, paginado}){
    const numeroDePaginas = [];
    for(let i=1; i<=Math.ceil(allRecetas/recetasPorPagina); i++){
        numeroDePaginas.push(i)
    }
    return(<nav>
        <ul>
            {numeroDePaginas?.map(numero =>(<li key={numero}>
                <a onClick={()=>paginado(numero)} >{numero}</a>
                </li>))}
        </ul>
    </nav>)
}