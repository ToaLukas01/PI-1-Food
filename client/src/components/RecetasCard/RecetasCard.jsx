
import React from "react";

//let prevId = 1;

export default function RecetasCard({name, dietas, imagen, id}){
    // return (<div>
    //         <h2>{name}</h2>
    //         {/* {dietas.length && dietas.map(d=>{return(<h4>Tipos de Dietas: {d}</h4>)})} */}
    //         {/* <h5>Dietas asociadas: {dietas && dietas.length ? dietas : 'N/A'}</h5> */}
    //         {/* <h4>{diettypes}</h4> */}
    //         {/* {dietas && dietas.map((diet) => <h4> {diet} </h4> )} */}
    //         {/* {dietas && <h4> {dietas[0]}</h4>} */}
    //         {/* {dietas?.map(e => {return (<h5 key={prevId++}>{e}</h5>)})}  */}
    //         <img src={imagen} alt="Imagen NO disponible" width="300px" height="300px" />
    // </div>)
    return(
        <React.Fragment>
            <div key = {id}>
                <h2>{name}</h2>
                { dietas.map(d => <h4>{ d + " "}</h4>)}
                {/* <h4>{dieta} </h4> */}
                <img src={imagen} alt="Imagen NO disponible" width="300px" height="300px" />
            </div>
        </React.Fragment>
    )
}
