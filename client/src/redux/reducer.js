
const initialState = {
    recetasAux: [],
    allRecetas: [],
    //dietsTypes: [],
    recetasDetail: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_ALL_RECETAS": return {
            ...state,
            recetasAux: action.payload,
            allRecetas: action.payload,
        };
        // case "GET_RECETAS_NAME": return {
            // ...state,
            // recetasAux: action.payload,
            // allRecetas: action.payload,
        // };
        // case "GET_RECETA_ID": return {
            // ...state,
            // recetasAux: action.payload,
            // allRecetas: action.payload,
        // };
        // case "POST_RECETA": return {

        // };
        // case "FILTER_BY_DIETS_TYPE": return {

        // };
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