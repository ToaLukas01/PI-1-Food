
import axios from "axios";

export const GET_ALL_RECIPES = "GET_ALL_RECIPES"
export const GET_RECIPE_NAME = "GET_RECIPE_NAME"
export const GET_RECIPE_ID = "GET_RECIPE_ID"
export const GET_RECIPE_DETALLE = "GET_RECIPE_DETALLE"
export const POST_RECIPE = "POST_RECIPE"
export const FILTER_BY_DIETS_TYPE = "FILTER_BY_DIETS_TYPE"
export const ORDER_BY_NAMES_AZ = "ORDER_BY_NAMES_AZ"
export const ORDER_BY_NAMES_ZA = "ORDER_BY_NAMES_ZA"
export const ORDER_BY_PUNTAJE = "ORDER_BY_PUNTAJE"


export const getAllRecipes = () => {
    return async function (dispatch) {
        return fetch("http://localhost:3001/recipes")
        .then( (res) => res.json())
        .then( (respuesta) => dispatch({
            type: GET_ALL_RECIPES,
            payload: respuesta,
        })).catch(err => console.log(err));
    };
};

export const getRecipeName = (name) => {

};

export const getRecipeID = (id) => {
    
};

export const getRecipeDetalle = () => {
    
};

export const postRecipe = (atributos) => {
    
};

export const filtrarDietas = () => {

};

export const orderByNamesAZ = () => {
    
};

export const orderByNamesZA= () => {
    
};

export const orderByPuntaje = () => {
    
};