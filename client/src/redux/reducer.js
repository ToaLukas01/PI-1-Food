
const initialState = {
    recetasFiltradas: [],
    allRecetas: [],
    //dietasTypes: [],
    //recetasDetail: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_ALL_RECETAS": return {
            ...state,
            recetasFiltradas: action.payload,
            allRecetas: action.payload,
        };
        // case "GET_RECETAS_NAME": return {
            // ...state,
            // recetasAux: action.payload,
            // allRecetas: action.payload,
        // };
        case "GET_RECETA_ID": return {
            ...state,
            recetasDetail: action.payload
        };
        // case "POST_RECETA": return {

        // };
        case "FILTER_BY_DIETS_TYPE": 
            const allRecetas = state.recetasFiltradas
            //let dietasAPI = []
            //let dietasDB = []
            //const filtroDietas = action.payload === "all" ? allRecetas : allRecetas.filter(r => r.dietas.name === action.payload)
            const filtroDietas = allRecetas.filter(r=>r.dietas?.some(d=>d === action.payload))
            // console.log(action.payload)
            // console.log("algo", allRecetas[5])
            // for(let i=0; i<allRecetas.length; i++){
            //     if(allRecetas[i].hasOwnProperty("creadoDB") && allRecetas[i].dietas.find(d => d.name.toLowerCase()  === action.payload.toLowerCase())){
            //         dietasDB.push(allRecetas[i])
            //     } else if(allRecetas[i].dietas.includes(action.payload.toLowerCase())){
            //         dietasAPI.push(allRecetas[i])
            //     }
            // }
            // const filtroDietas = dietasAPI.concat(dietasDB)
            // console.log(filtroDietas)
            return {
                ...state,
                allRecetas: filtroDietas
            };
        // case "ORDER_BY_NAMES_AZ": return {

        // };
        // case "ORDER_BY_NAMES_ZA": return {

        // };
        // case "ORDER_BY_PUNTAJE": return {

        // };
       default: return {...state};
    };
};

export default rootReducer;