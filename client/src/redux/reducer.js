
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
            const allRecetas = state.allRecetas
            //const filtradoDietas = action.payload === "all" ? allRecetas : allRecetas.filter(r => r.dietas === action.payload)
            const filtroDietas = allRecetas.filter(r=>r.dietas?.some(d=>d.name.toLowerCase() === action.payload.toLowerCase()))
            console.log(filtroDietas)
            return {
                ...state,
                recetasFiltradas: filtroDietas
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