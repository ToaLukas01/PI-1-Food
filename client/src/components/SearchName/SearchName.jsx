
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipeName } from "../../redux/actions";
import estilos from "./SearchName.module.css";

export default function SearchName(){
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    function handleInputChange(e){
        e.preventDefault();
        setName(e.target.value)
        //console.log(name)
    };

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getRecipeName(name))
        setName("")
    };

    return (<div className={estilos.contenedor}>
        <React.Fragment>
            <input className={estilos.escribir} type="text" placeholder="Buscar Nombre" onChange={e=>handleInputChange(e)}/>
            <button className={estilos.buscar} type="submit" onClick={e=>handleSubmit(e)}>Buscar</button>
        </React.Fragment>
    </div>)
}
