
import React from "react";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../../redux/actions";
import { Link } from "react-router-dom";
//import RecetasDetail from "../RecetasDetail/RecetasDetaill";
import RecetasCard from "../RecetasCard/RecetasCard";




export default function Home (){
    const dispatch = useDispatch();
    const allRecetas = useSelector ((state) => state.allRecetas) //trae del estado inicial todas las recetas
    
    useEffect(() => { 
        dispatch(getAllRecipes())
    }, [dispatch] );  
    //traigo del estado las recetas cuando el componente se monta
    //en corchete va de lo que depende el useEffect(le estoy diciendo que si sucede (en este caso nada), se monte useEffect y funcione)
    
    function handleClick(c){ //le pasamos un evento al handler como la variable c 
        c.preventDefault(); //evito que recargue la pagina y se rompa
        dispatch(getAllRecipes());
    };

    return (<div>
        <h1>Nuestra lista de Recetas</h1>

        <Link to="/recipes"><button>Crea tu propia Receta</button></Link>

        <div>
        <button onClick={c => {handleClick(c)}}>Recargar Recetas</button>
        </div>

        <div>
            {/* lista desplegable de opciones de ordenamiento alfabetico */}
            <select>
                <option value="Alfabeticamente">ORdenar Alfabeticamente</option>
                <option value="AZ">Ordenar de A-Z</option>
                <option value="ZA">Ordenar de Z-A</option>
            </select>

            {/* lista desplegable de opciones de ordenamiento por Nivel de comida Saludable */}
            <select>
                <option value="nivelSalud">Ordenar por nivel de comida saludable</option>
                <option value="ascend">Ordenar desde el mayor puntaje</option>
                <option value="descend">Ordenar desde el menor puntaje</option>
            </select>

            {/* lista desplegable de opciones de los tipos de Dietas */}
            <select>
                <option velue="all">Todas las Dietas</option>
                <option value="Gluten Free">Gluten Free</option>
                <option value="Ketogenic">Ketogenic</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
                <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Pescetarian">Pescetarian</option>
                <option value="Paleo">Paleo</option>
                <option value="Primal">Primal</option>
                <option value="Low FODMAP">Low FODMAP</option>
                <option value="Whole30">Whole30</option>
            </select>

            {/* lista desplegable de opciones sobre las Recetas */}
            <select>
                <option value="ALL">Todas las Recetas</option>
                <option value="creadas">Recetas Creadas</option>
                <option value="actuales">Recetas Actuales</option>
            </select>

        
         <React.Fragment>
             <div>
                 {
                 allRecetas?.map(r => {
                         return(
                             <div id = {r.id}>
                                 <RecetasCard name = {r.name} dietas = {r.dietas} imagen = {r.imagen} />
                             </div>
                         )
                     })
                 }
             </div>
         </React.Fragment>
     )


        </div>
        
    </div>)
}



            {/* {allRecetas.length && allRecetas.map(r => { return (<div>
                    <Link to={"/home/" + r.id}>
                        <RecetasCard
                            name={r.name} 
                            dietas={r.dietas} 
                            imagen={r.imagen}
                            key={r.id} 
                            />
                    </Link>
                </div>)})} */}

            {/* {allRecetas && allRecetas.map( r=>{ return(
                <RecetasCard mane={r.name} dietas={r.dietas} imagen={r.imagen}/>
            )})} */}