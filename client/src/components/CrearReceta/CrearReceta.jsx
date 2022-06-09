
import React from "react";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { postRecipe, getDietas } from "../../redux/actions";
import { Link, useHistory } from "react-router-dom";
import estilos from "./CrearReceta.module.css";

function validarDatos(input){
    let error = {}
    if(!input.name){
        error.name = "La Receta debe poseer un nombre";
    }
    if (!input.resumen){
        error.resumen = "La Receta debe poseer un resumen de si misma";
    }
    // } else if (input.imagen && typeof input.imagen !== "string"){
    //     error.imagen = "La imagen de la Receta debe ser una url o dejar la casilla vacia"
    // }
    return error
};

export default function CrearReceta(){
    const dispatch = useDispatch();
    const history = useHistory() //history es un metodo del router que lo que haces es redirigir a la ruta que le indiquemos
    //const dietas = useSelector((state)=> state.dietas);
    const [error, setError] = useState({});
    const [input, setInput] =useState({
        name: "",
        resumen: "",
        nivelSalud: null,
        imagen: null,
        pasos: null,
        tipoDietas: []
    })
    
    useEffect(()=>{
        dispatch(getDietas())  
    }, [dispatch]) 
    
    
    
    function handelInput(e){
        if(e.target.name === "nivelSalud"){
            setInput({
                ...input,
                [e.target.name]: Number(e.target.value) 
            })
            return 
        }
        // if( typeof input.nivelSalud === "string" && input.nivelSalud.length > 0){
        //     input.nivelSalud = Number(input.nivelSalud)
        // }
        setInput({
            ...input,
            [e.target.name]: e.target.value 
        })
        setError(validarDatos({
            ...input,
            [e.target.name]: e.target.value 
        }))
        console.log(input)
    };

    function handleCheck(e){
        if(e.target.checked){           //pregunto si el target esta chequeado
            setInput({                  //para luego setear el input con la opcion que le damos
                ...input,
                tipoDietas:[...input.tipoDietas, e.target.value]  //y guardar en nuestro arreglo de dietas todas las seleccionadas
            })
        }
    };

    // function handleSelect(e){
    //     setInput({
    //         ...input,
    //         tipoDietas:[...input.tipoDietas, e.target.value]
    //     })
    // };

    // function handleDelete(e){
    //     setInput({                  
    //         ...input,
    //         tipoDietas: input.tipoDietas.filter(d => d !== e) 
    //     })
    // };

    function handleSubmit(e){
        e.preventDefault();
        console.log(input)
        if( !input.name || !input.resumen){
            return alert("Debe complear los parametros obligatorios")
        } else {
            dispatch(postRecipe(input))

            alert("Receta Creada !")
            setInput({
                name: "",
                resumen: "",
                nivelSalud: null,
                imagen: null,
                pasos: null,
                tipoDietas: []
            })
            history.push("/home") //aqui history nos redirige al home una vez creada la receta
        }
        
    };


    return (<div className={estilos.background}>
        <Link to="/home"><button className={estilos.propiedad}>Volver a pagina principal</button></Link>
        <div>
        <h1>Crear Receta Propia</h1>
        </div>
        <form className={estilos.contenedor} onSubmit={(e)=>handleSubmit(e)}>
            <div className={estilos.contenedor}>
                <label className={estilos.propiedad}>Nombre*: </label>
                <input className={estilos.escribir} type="text" value={input.name} name="name" onChange={(e)=>handelInput(e)}/>
                {error.name && (<p>{error.name}</p>)}
            </div>
            <div className={estilos.contenedor}>
                <label className={estilos.propiedad}>Resumen*: </label>
                <textarea className={estilos.escribir} type="text" value={input.resumen} name="resumen" onChange={(e)=>handelInput(e)}/>
                {error.resumen && (<p>{error.resumen}</p>)}
            </div>
            <div className={estilos.contenedor}>
                <label className={estilos.propiedad}>Nivel de comida saludable: </label>
                <input className={estilos.escribir} type="number" value={input.nivelSalud} name="nivelSalud" onChange={(e)=>handelInput(e)}/>
            </div>
            <div className={estilos.contenedor}>
                <label className={estilos.propiedad}>Imagen: </label>
                <input className={estilos.escribir} type="text" value={input.imagen} name="imagen" onChange={(e)=>handelInput(e)}/>
                {/* <span>{error?.imagen}</span> */}
            </div>
            <div className={estilos.contenedor}>
                <label className={estilos.propiedad}>Pasos a seguir: </label>
                <textarea className={estilos.escribir} type="text" value={input.pasos} name="pasos" onChange={(e)=>handelInput(e)}/>
            </div>
            <div className={estilos.contenedor}>
                <label className={estilos.dietas}>Dietas relacionadas: </label>
                <label className={estilos.propiedad}><input className={estilos.check}type="checkbox" name="gluten free" value="gluten free" onChange={(e)=>handleCheck(e)}/>Gluten Free</label>
                <label className={estilos.propiedad}><input type="checkbox" name="dairy free" value="dairy free" onChange={(e)=>handleCheck(e)}/>Dairy Free</label>
                <label className={estilos.propiedad}><input type="checkbox" name="lacto ovo vegetarian" value="lacto ovo vegetarian" onChange={(e)=>handleCheck(e)}/>Lacto Ovo Vegetarian</label>
                <label className={estilos.propiedad}><input type="checkbox" name="vegan" value="vegan" onChange={(e)=>handleCheck(e)}/>Vegan</label>
                <label className={estilos.propiedad}><input type="checkbox" name="paleolithic" value="paleolithic" onChange={(e)=>handleCheck(e)}/>Paleolithic</label>
                <label className={estilos.propiedad}><input type="checkbox" name="primal" value="primal" onChange={(e)=>handleCheck(e)}/>Primal</label>
                <label className={estilos.propiedad}><input type="checkbox" name="whole 30" value="whole 30" onChange={(e)=>handleCheck(e)}/>Whole 30</label>
                <label className={estilos.propiedad}><input type="checkbox" name="fodmap friendly" value="fodmap friendly" onChange={(e)=>handleCheck(e)}/>Fodmap Friendly</label>
                <label className={estilos.propiedad}><input type="checkbox" name="vegetarian" value="vegetarian" onChange={(e)=>handleCheck(e)}/>Vegetarian</label>
                <label className={estilos.propiedad}><input type="checkbox" name="pescatarian" value="pescatarian" onChange={(e)=>handleCheck(e)}/>Pescatarian</label>
                <label className={estilos.propiedad}><input type="checkbox" name="ketogenic" value="ketogenic" onChange={(e)=>handleCheck(e)}/>Ketogenic</label>
            </div>
            {/* <div>
            <label>Dietas relacionadas: </label>
                <select onChange={(e)=>handleSelect(e)}>
                    {dietas.map(d =>(<option value={d.name}>{d.name} </option>))}
                </select> 
            <ul><li>{input.tipoDietas.map(d => d + ", ")}</li></ul>
            </div> */}
            <div className={estilos.contenedor}>
            <button className={estilos.propiedad} type="submit">Crear receta</button>
            </div>
        </form>
        {/* <div>
        {input.tipoDietas.map(d => { return (
            <div>
                <p>{d}</p>
                <button onClick={(e)=>handleDelete(e)}>x</button>
            </div>)})}
        </div> */}
    </div>)
}


