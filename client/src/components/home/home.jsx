
import React from "react";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes, filtrarDietas, creadosDB, orderByAlfabeto, orderByPuntaje } from "../../redux/actions";
import { Link } from "react-router-dom";
//import RecetasDetail from "../RecetasDetail/RecetasDetaill";
import RecetasCard from "../RecetasCard/RecetasCard";
import Paginado from "../Paginado/Paginado";
import estilos from "./Home.module.css";
import SearchName from "../SearchName/SearchName";

export default function Home (){
    const dispatch = useDispatch();
    const allRecetas = useSelector ((state) => state.allRecetas) //trae del estado inicial todas las recetas
    const [orden, setOrden] = useState("")
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
    
    function handleClick(e){ //le pasamos un evento al handler como la variable c 
        e.preventDefault(); //evito que recargue la pagina y se rompa
        dispatch(getAllRecipes());
    };

    function handleFiltroDietas(e){
        dispatch(filtrarDietas(e.target.value))
    };

    function handleCreadosDB(e){
        dispatch(creadosDB(e.target.value))
    };

    function handleOrdenarAlfabeto(e){
        e.preventDefault();
        dispatch(orderByAlfabeto(e.target.value))
        setPaginaActual(1);
        setOrden(`Ordenado de ${e.target.value}`)
    };

    function handleOrdenarPuntaje(e){
        e.preventDefault();
        dispatch(orderByPuntaje(e.target.value))
        setPaginaActual(1);
        setOrden(`Ordenado de ${e.target.value}`)
    };


    return (<div className={estilos.background}>
        <h1>Nuestra lista de Recetas</h1>

        <Link to="/recipes"><button>Crea tu propia Receta</button></Link>

        <div>
        <button onClick={c => {handleClick(c)}}>Recargar Recetas</button>
        </div>

        <div>
            {/* lista desplegable de opciones de ordenamiento alfabetico */}
            <select onChange={e=>handleOrdenarAlfabeto(e)}>
                <option value="Alfabeticamente">Ordenar Alfabeticamente</option>
                <option value="AZ">Ordenadas de A-Z</option>
                <option value="ZA">Ordenadas de Z-A</option>
            </select>

            {/* lista desplegable de opciones de ordenamiento por Nivel de comida Saludable */}
            <select onChange={e=>handleOrdenarPuntaje(e)}>
                <option value="nivelSalud">Ordenar por nivel de comida saludable</option>
                <option value="ascendente">Ordenadas desde el mayor puntaje</option>
                <option value="descendente">Ordenaas desde el menor puntaje</option>
            </select>

            {/* lista desplegable de opciones de los tipos de Dietas */}
            <select onChange={e=>handleFiltroDietas(e)}>
                <option velue="ALL">Todas las Dietas</option>
                <option value="gluten free">Gluten Free</option>
                <option value="dairy free">Dairy Free</option>
                <option value="lacto ovo vegetarian">Lacto-Ovo-Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="paleolithic">Paleolithic</option>
                <option value="primal">Primal</option>
                <option value="whole 30">Whole30</option>
                <option value="fodmap friendly">Fodmap Friendly</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="pescatarian">Pescatarian</option>
                <option value="ketogenic">Ketogenic</option>

                {/* <option value="ovo-vegetarian">Ovo-Vegetarian</option> */}
            </select>

            {/* lista desplegable de opciones sobre las Recetas */}
            <select onChange={e=>handleCreadosDB(e)}>
                <option value="all">Todas las Recetas</option>
                <option value="DB">Recetas Creadas</option>
                <option value="api">Recetas Actuales</option>
            </select>

            <SearchName/>
            
            <Paginado
            recetasPorPagina={recetasPorPagina}
            allRecetas={allRecetas.length}
            paginado={paginado}
            />

            <React.Fragment>
                <div>
                    {recetasActuales?.map(r => {return(
                                <div id = {r.id}>
                                    <Link to={"/recipes/" + r.id}>
                                    <RecetasCard name = {r.name} dietas = {r.dietas} imagen = {r.imagen} />
                                    </Link>
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