
import axios from "axios";

export const GET_ALL_RECETAS = "GET_ALL_RECETAS"
export const GET_RECETAS_NAME = "GET_RECETAS_NAME"
export const GET_RECETA_ID = "GET_RECETA_ID"
export const POST_RECETA = "POST_RECETA"
export const FILTER_BY_DIETS_TYPE = "FILTER_BY_DIETS_TYPE"
export const ORDER_BY_NAMES_AZ = "ORDER_BY_NAMES_AZ"
export const ORDER_BY_NAMES_ZA = "ORDER_BY_NAMES_ZA"
export const ORDER_BY_PUNTAJE = "ORDER_BY_PUNTAJE"


export const getAllRecipes = () => {
    // return async function(dispatch){
    //     axios.get("http://localhost:3001/recipes")
    //     .then((res)=>{
    //         return dispatch({
    //             type: GET_ALL_RECIPES,
    //             payload: res.data
    //         })
    //     })
    //     .catch((err)=>{console.log(err)})
    // }
    return async function (dispatch) {
        try {
            var recetas = await axios.get("http://localhost:3001/recipes")
            console.log(recetas.data)
            return dispatch({
                type: GET_ALL_RECETAS,
                payload: recetas.data
            })
        }catch(err){
            console.log(err)
        }
    };       
};


export const getRecipeName = (name) => {
    return async function (dispatch) {
        try {
            var recetas = await axios.get(`http://localhost:3001/recipes?name=${name}`)
            return dispatch({
                type: GET_RECETAS_NAME,
                payload: recetas.data
            })
        }catch(err){
            console.log(err)
        }
    };
};


export const getRecipeID = (id) => {
    return async function (dispatch) {
        try {
            var recetas = await axios.get(`http://localhost:3001/recipes/${id}`)
            return dispatch({
                type: GET_RECETA_ID,
                payload: recetas.data
            })
        }catch(err){
            console.log(err)
        }
    };
};


export const postRecipe = (atributos) => {
    return async function (dispatch) {
        var post = await axios.post('http://localhost:3001/recipe', atributos);
        return post;
    }
};

export const filtrarDietas = () => {

};

export const orderByNamesAZ = () => {
    
};

export const orderByNamesZA= () => {
    
};

export const orderByPuntaje = () => {
    
};