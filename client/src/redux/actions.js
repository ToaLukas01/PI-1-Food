
import axios from "axios";

export const GET_ALL_RECIPES = "GET_ALL_RECIPES"
export const GET_RECIPE_NAME = "GET_RECIPE_NAME"
export const GET_RECIPE_ID = "GET_RECIPE_ID"
export const POST_RECIPE = "POST_RECIPE"
export const FILTER_BY_DIETS_TYPE = "FILTER_BY_DIETS_TYPE"
export const ORDER_BY_NAMES_AZ = "ORDER_BY_NAMES_AZ"
export const ORDER_BY_NAMES_ZA = "ORDER_BY_NAMES_ZA"
export const ORDER_BY_PUNTAJE = "ORDER_BY_PUNTAJE"


export const getAllRecipes = () => {
    // return async function (dispatch) {
    //     return fetch("http://localhost:3001/recipes")
    //     //.then( (res) => res.json())
    //     .then( (respuesta) => dispatch({
    //         type: GET_ALL_RECIPES,
    //         payload: respuesta,
    //     })).catch(err => console.log(err));
    // };
    return async function(dispatch) {
        try {
            var recetas = await axios.get("http://localhost:3001/recipes")
            return dispatch({
                type:GET_ALL_RECIPES,
                payload: recetas.data
            })
        } catch (err){
            console.log(err)
        }   
    }
};


export const getRecipeName = (name) => {
    return async function (dispatch) {
        return fetch(`http://localhost:3001/recipes?name=${name}`)
        //.then( (res) => res.json())
        .then( (respuesta) => dispatch({
            type: GET_ALL_RECIPES,
            payload: respuesta,
        })).catch(err => console.log(err));
    };
};


export const getRecipeID = (id) => {
    return async function (dispatch) {
        return fetch(`http://localhost:3001/recipes/${id}`)
        //.then( (res) => res.json())
        .then( (respuesta) => dispatch({
            type: GET_ALL_RECIPES,
            payload: respuesta,
        })).catch(err => console.log(err));
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