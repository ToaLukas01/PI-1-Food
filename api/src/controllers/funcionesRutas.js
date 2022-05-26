
require('dotenv').config();
const { Op, Recipe, Dietas } = require('../db');
const axios = require('axios');
const { API_KEY } = process.env

async function getApiRecetas() {
    try {
        const recetasApi = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
        const apiMapeo = recetasApi.data?.results.map((r)=>{
            return {
                id: r.id,
                name: r.title,
                resumen: r.summary,
                nivelSalud: r.healthScore,
                imagen: r.image,
                pasos: (r.analyzedInstructions[0] && r.analyzedInstructions[0].steps? r.analyzedInstructions[0].steps.map(s => s.step).join(" \n"):''),
                dietas: r.diets
            }     
        })
        return apiMapeo //return Recipe.bulkCreate(apiMapeo)
    } catch(err){
        console.log(err)
    }
}

async function getDbRecetas (){
    return await Recipe.findAll({ include: {
        model: Dietas,
        attributes: ["name"],
        through: {
            attributes: []
        }
    }})
}

async function getAllRecetas(){
    const recetasApi = await getApiRecetas();
    const recetasDb = await getDbRecetas();
    const recetas = await recetasApi.concat(recetasDb);
    return recetas
}



module.exports = {
    getApiRecetas,
    getDbRecetas,
    getAllRecetas,
};