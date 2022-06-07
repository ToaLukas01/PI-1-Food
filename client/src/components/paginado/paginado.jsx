
import React from "react";
import estilos from "./Paginado.module.css";

export default function Paginado({recetasPorPagina, allRecetas, paginado}){
    const numeroDePaginas = [];
    for(let i=1; i<=Math.ceil(allRecetas/recetasPorPagina); i++){
        numeroDePaginas.push(i)
    }
    return(<div className={estilos.paginado}>
        <div >
            {numeroDePaginas?.map(numero =>(<button key={numero} onClick={()=>paginado(numero)}>{numero}</button>))}      
        </div>
    </div>)
}

// return(<nav >
//     <ul className={estilos.paginado}>
//         {numeroDePaginas?.map(numero =>(<div key={numero}>
//             <a onClick={()=>paginado(numero)} >{numero}</a>
//             </div>))}
//     </ul>
// </nav>)