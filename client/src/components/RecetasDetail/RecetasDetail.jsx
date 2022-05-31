
import React from "react";
import RecetasCard from "../RecetasCard/RecetasCard";
import { useSelector } from "react-redux";
import { getRecipeID } from "../../redux/actions";

export default function RecetasDetail(){
    const dispatch = useDispatch();
    const recetas = useSelector( (state) => state.recetasDetail) //trae del estado inicial todas las recetas
    
    useEffect(() => { 
        dispatch(getRecipeID())
    }, [dispatch] );  
    
    return (<div>
        {recetas?.map( r => {
            return (<React.Fragment>
                <RecetasCard
                name={r.name}
                resumen={r.resumen}
                nivelSalud={r.nivelSalud}
                pasos={r.pasos}
                dietas={r.dietas}
                imagen={r.imagen}
                key={r.id}/>
            </React.Fragment>)})}
    </div>)
}