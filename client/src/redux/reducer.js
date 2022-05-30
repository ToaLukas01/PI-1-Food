
const initialState = {
    // recipes: [],
    allRecetas: [],
    // dietsTypes: [],
    // recipesDetail: []
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_ALL_RECIPES": return {
            ...state,
            allRecetas: action.payload,
        };
        // case "GET_RECIPE_NAME": return {

        // };
        // case "GET_RECIPE_ID": return {

        // };
        // case "POST_RECIPE": return {

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