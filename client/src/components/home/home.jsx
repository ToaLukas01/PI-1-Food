
import React from "react";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes, filtrarDietas } from "../../redux/actions";
import { Link } from "react-router-dom";
//import RecetasDetail from "../RecetasDetail/RecetasDetaill";
import RecetasCard from "../RecetasCard/RecetasCard";
import Paginado from "../Paginado/Paginado";



export default function Home (){
    const dispatch = useDispatch();
    const allRecetas = useSelector ((state) => state.allRecetas) //trae del estado inicial todas las recetas
    const [paginaActual, setPaginaActual] = useState(1);
    const [recetasPorPagina, setRecetasPorPagina] = useState(9)
    const indiceUltimaReceta = paginaActual * recetasPorPagina
    const indicePrimerReceta = indiceUltimaReceta - recetasPorPagina
    const recetasActuales = allRecetas.slice(indicePrimerReceta, indiceUltimaReceta)

    const paginado = (pagNumber) => {
        setPaginaActual(pagNumber)
    }

    useEffect(() => { 
        dispatch(getAllRecipes())
    }, [dispatch] );  
    //traigo del estado las recetas cuando el componente se monta
    //en corchete va de lo que depende el useEffect(le estoy diciendo que si sucede (en este caso nada), se monte useEffect y funcione)
    
    function handleClick(c){ //le pasamos un evento al handler como la variable c 
        c.preventDefault(); //evito que recargue la pagina y se rompa
        dispatch(getAllRecipes());
    };

    function handleFiltroDietas(e){
        dispatch(filtrarDietas(e.target.value))
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
            <select onChange={e=>handleFiltroDietas(e) }>
                <option velue="all">Todas las Dietas</option>
                <option value="gluten free">Gluten Free</option>
                <option value="ketogenic">Ketogenic</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="lacto-vegetarian">Lacto-Vegetarian</option>
                <option value="ovo-vegetarian">Ovo-Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="pescetarian">Pescetarian</option>
                <option value="paleo">Paleo</option>
                <option value="primal">Primal</option>
                <option value="low FODMAP">Low FODMAP</option>
                <option value="whole30">Whole30</option>
            </select>

            {/* lista desplegable de opciones sobre las Recetas */}
            <select>
                <option value="ALL">Todas las Recetas</option>
                <option value="creadas">Recetas Creadas</option>
                <option value="actuales">Recetas Actuales</option>
            </select>

            <Paginado
            recetasPorPagina={recetasPorPagina}
            allRecetas={allRecetas.length}
            paginado={paginado}
            />

            <React.Fragment>
                <div>
                    {recetasActuales?.map(r => {return(
                                <div id = {r.id}>
                                    <RecetasCard name = {r.name} dietas = {r.dietas} imagen = {r.imagen} />
                                </div>)})}
                </div>
            </React.Fragment>)
            
            <Paginado
            recetasPorPagina={recetasPorPagina}
            allRecetas={allRecetas.length}
            paginado={paginado}
            />

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