
import React from "react";
//import RecetasCard from "../RecetasCard/RecetasCard";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeID } from "../../redux/actions";
import { Link } from "react-router-dom";

export default function RecetasDetail(){
    const dispatch = useDispatch();
    const recetas = useSelector( (state) => state.recetasDetail) //trae del estado inicial todas las recetas
    
    useEffect(() => { 
        dispatch(getRecipeID())
    }, [dispatch] );  
    
    return (<div>
          {recetas.length > 0 ?
        <div>
        <h2>{recetas.name}</h2>
        <img src={recetas.imagen} alt="Imagen NO disponible" width="300px" height="300px" />
        <p><h5>Resumen del plato: {recetas[0].resumen.replace(/<[^>]*>?/g, '')}</h5></p>
        {/* <h5>Dietas asociadas: { 
            recetas[0].dietas && recetas[0].dietas.length?
            recetas[0].dietas.map(dieta => ` ${dieta}. `)
            :
            recetas[0].dietas ? 
            "No se especificó ningún tipo de dieta para esta receta, lo siento..."
            :
            recetas[0].Dietas && recetas[0].Dietas.length?                    
            recetas[0].Dietas.map(dieta => ` ${dieta.name}. `) 
            :
            "No se especificó ningún tipo de dieta para esta receta, lo siento..."
        } </h5> */}
        <h5>NIvel de comida saludable: {recetas[0].nivelSalud}</h5>
        <p>Pasosa a seguir: {recetas[0].pasos}</p>
        <Link to="/home"><button>Volver al menu principal</button></Link>
        </div> 
        : <p>Loading...</p>}
    </div>)
}

// return (<div>
//     {recetas?.map( r => {
//         return (<React.Fragment>
//             <div>
//                 <h2>{r.name}</h2>
//                 {/* <p>dietas={r.dietas}</p> */}
//                 <img src={r.imagen} alt="Imagen NO disponible" width="300px" height="300px" />
//                 <p><h5>Resumen: {r[0].resumen.replace(/<[^>]*>?/g, '')}</h5></p>
//                 {/* resumen={r.resumen} */}
//                 <h5>Dietas asociadas: { 
//                     recipe[0].diets && recipe[0].diets.length?
//                     recipe[0].diets.map(diet => ` ${diet}. `)
//                     :
//                     recipe[0].diets ? 
//                     "No se especificó ningún tipo de dieta para esta receta, lo siento..."
//                     :
//                     recipe[0].DietTypes && recipe[0].DietTypes.length?                    
//                     recipe[0].DietTypes.map(diet => ` ${diet.name}. `) 
//                     :
//                     "No se especificó ningún tipo de dieta para esta receta, lo siento..."
//                 } </h5>
//                 nivelSalud={r.nivelSalud}
//                 pasos={r.pasos}
//                 key={r.id}
//             </div>
//         </React.Fragment>)})}
// </div>)