
import React from "react";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../../redux/actions";
import { Link } from "react-router-dom";
import RecetasDetail from "../RecetasDetail/RecetasDetail";




export default function Home (){
    const dispatch = useDispatch();
    const allRecipes = useSelector ( (state) => state.allRecetas) //trae del estado inicial todas las recetas
    useEffect( () => { dispatch( getAllRecipes() ) }, [dispatch] );  
    //traigo del estado las recetas cuando el componente se monta
    //en corchete va de lo que depende el useEffect(le estoy diciendo que si sucede (en este caso nada), se monte useEffect y funcione)
    
    function handleClick(c){
        c.preventDefault(); //evito que recargue la pagina y se rompa
        dispatch(getAllRecipes(c));
    };

    return ( <div>
        <Link to="/recipes"><button>Crea tu propia Receta</button></Link>
        <h1>Nuestra lista de Recetas</h1>
        <button onClick={c => {handleClick(c)}}>Recargar Recetas</button>

        <div>
            <select></select>

            <select></select>

            <select></select>
        </div>
        <RecetasDetail/>
    </div>)
}



//     return (
//         <div>
//             <Link to='/videogame'>Create Videogame</Link>
//             <h1>Best Videogames Project</h1>
//             <button onClick={e => {handleClick(e)}}>
//                 Reload All VideoGames
//                 </button>
//         <div>
// <select>
//                 <option value='asc'>Ascendente</option>
//                 <option value='des'>Descendente</option>
//             </select>
//             <select>
//                 <option value="act">Action</option>
//                 <option value="ind">Indie</option>
//                 <option value="adv">Adventure</option>
//                 <option value="rpg">RPG</option>
//                 <option value="str">Strategy</option>
//                 <option value="sho">Shooter</option>
//                 <option value="cas">Casual</option>
//                 <option value="sim">Simulation</option>
//                 <option value="puz">Puzzle</option>
//                 <option value="arc">Arcade</option>
//                 <option value="pla">Platformer </option>
//                 <option value="rac">Racing </option>
//                 <option value="mas">Massively Multiplayer </option>
//                 <option value="spo">Sports</option>
//                 <option value="fig">Fighting</option>
//                 <option value="fam">Family</option>
//                 <option value="boa">Board Games</option>
//                 <option value="edu">Educational</option>
//                 <option value="car">Card</option>
//             </select>
//             <select>
//                 <option value="tod">Todos</option>
//                 <option value="cre">Creados</option>
//                 <option value="exi">Existentes</option>
//             </select>


//            { allVideogames.map((a) => {
//                     return (
//                         <fragment>
//                             <Link to={"/home" + a.id}>
//                               <Card name={a.name} image={a.img} genres={a.genres+""} key={a.id} />
//                             </Link>
//                         </fragment>
//            );
//                 })}
//          </div>
//         </div>
//     )
// }