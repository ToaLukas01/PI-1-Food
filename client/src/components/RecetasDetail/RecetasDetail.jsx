
import React from "react";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeID } from "../../redux/actions";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import estilos from "./RecetasDetail.module.css";

export default function RecetasDetail(){
    const dispatch = useDispatch();
    const recetas = useSelector( (state) => state.recetasDetail) //trae del estado inicial todas las recetas
    const { id } = useParams()

    useEffect(() => { 
        dispatch(getRecipeID(id))
    }, [dispatch, id] );  
    
    return (<div className={estilos.background}>
          {recetas.length > 0 ?
        <div>
        <h2>{recetas[0].name}</h2>

        <img src={recetas[0].image ? recetas[0].image : recetas[0].imagen} alt="Imagen NO disponible" width="300px" height="300px" />

        <p><h5>Resumen del plato: {recetas[0].resumen.replace(/<[^>]*>?/g, '')}</h5></p>

        <h5>NIvel de comida saludable: {recetas[0].nivelSalud ? recetas[0].nivelSalud : "No se a indicado el nivel de salud de esta receta"}</h5>

        <p>Pasos a seguir: {recetas[0].pasos ? recetas[0].pasos : "No se han indicado pasos a seguir para esta receta"}</p>

        <h4>Dietas: {!recetas[0].creadoDB ? recetas[0].dietas + "" : recetas[0].dietas.map((d) => d.name + (' '))}</h4>

        <Link to="/home"><button>Volver al menu principal</button></Link>
        </div> 
        : <p>Loading...</p>}
    </div>)
}

