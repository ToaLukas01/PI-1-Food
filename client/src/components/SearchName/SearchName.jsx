
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipeName } from "../../redux/actions";

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
        //setName("")
    };

    return (<div>
        <React.Fragment>
            <input type="text" placeholder="Buscar Nombre" onChange={e=>handleInputChange(e)}/>
            <button type="submit" onClick={e=>handleSubmit(e)}>Buscar</button>
        </React.Fragment>
    </div>)
}
