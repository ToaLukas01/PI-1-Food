
import React from "react";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { postRecipe, getDietas } from "../../redux/actions";
import { Link, useHistory } from "react-router-dom";

export default function CrearReceta(){
    const dispatch = useDispatch();
    const history = useHistory() //history es un metodo del router que lo que haces es redirigir a la ruta que le indiquemos
    //const dietas = useSelector((state)=> state.dietas);
    const [input, setInput] =useState({
        name: "",
        resumen: "",
        nivelSalud: "",
        imagen: "",
        pasos: "",
        tipoDietas: []
    })
    
    useEffect(()=>{
        dispatch(getDietas())  
    }, [dispatch]) 
    
    function handelChange(e){
        if(e.target.name === "nivelSalud"){
            setInput({
                ...input,
                [e.target.name]: Number(e.target.value) 
            })
            return 
        }
        setInput({
            ...input,
            [e.target.name]: e.target.value 
        })
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

    function handleSubmit(e){
        e.preventDefault();
        console.log(input)
        dispatch(postRecipe(input))

        alert("Receta Creada !")
        setInput({
            name: "",
            resumen: "",
            nivelSalud: "",
            imagen: "",
            pasos: "",
            tipoDietas: []
        })
        history.push("/home") //aqui history nos redirige al home una vez creada la receta
    };


    return (<div>
        <Link to="/home"><button>Volver a pagina principal</button></Link>
        <h1>Crear Receta Propia</h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div>
                <label>Nombre: </label>
                <input type="text" value={input.name} name="name" onChange={(e)=>handelChange(e)}/>
            </div>
            <div>
                <label>Resumen: </label>
                <input type="text" value={input.resumen} name="resumen" onChange={(e)=>handelChange(e)}/>
            </div>
            <div>
                <label>Nivel de comida saludable: </label>
                <input type="number" value={input.nivelSalud} name="nivelSalud" onChange={(e)=>handelChange(e)}/>
            </div>
            <div>
                <label>Imagen: </label>
                <input type="text" value={input.imagen} name="imagen" onChange={(e)=>handelChange(e)}/>
            </div>
            <div>
                <label>Pasos a seguir: </label>
                <input type="text" value={input.pasos} name="pasos" onChange={(e)=>handelChange(e)}/>
            </div>
            <div>
                <label>Dietas relacionadas: </label>
                <label><input type="checkbox" name="gluten free" value="gluten free" onChange={(e)=>handleCheck(e)}/>Gluten Free</label>
                <label><input type="checkbox" name="dairy free" value="dairy free" onChange={(e)=>handleCheck(e)}/>Dairy Free</label>
                <label><input type="checkbox" name="lacto ovo vegetarian" value="lacto ovo vegetarian" onChange={(e)=>handleCheck(e)}/>Lacto Ovo Vegetarian</label>
                <label><input type="checkbox" name="vegan" value="vegan" onChange={(e)=>handleCheck(e)}/>Vegan</label>
                <label><input type="checkbox" name="paleolithic" value="paleolithic" onChange={(e)=>handleCheck(e)}/>Paleolithic</label>
                <label><input type="checkbox" name="primal" value="primal" onChange={(e)=>handleCheck(e)}/>Primal</label>
                <label><input type="checkbox" name="whole 30" value="whole 30" onChange={(e)=>handleCheck(e)}/>Whole 30</label>
                <label><input type="checkbox" name="fodmap friendly" value="fodmap friendly" onChange={(e)=>handleCheck(e)}/>Fodmap Friendly</label>
                <label><input type="checkbox" name="vegetarian" value="vegetarian" onChange={(e)=>handleCheck(e)}/>Vegetarian</label>
                <label><input type="checkbox" name="pescatarian" value="pescatarian" onChange={(e)=>handleCheck(e)}/>Pescatarian</label>
                <label><input type="checkbox" name="ketogenic" value="ketogenic" onChange={(e)=>handleCheck(e)}/>Ketogenic</label>
            </div>
            {/* <label>Dietas relacionadas: </label>
                <select onChange={(e)=>handleSelect(e)}>
                    {dietas.map(d =>(<option value={d.name}>{d.name} </option>))}
                </select> 
            <ul><li>{input.tipoDietas.map(d => d + ", ")}</li></ul> */}

            <button type="submit">Crear receta</button>
        </form>
    </div>)
}


