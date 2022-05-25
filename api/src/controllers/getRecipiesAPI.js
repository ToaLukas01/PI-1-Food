
require('dotenv').config();
const { Op, Recipe, Dietas } = require('../db');
const axios = require('axios');
const { API_KEY } = process.env

async function getAllRecetas() {
    try {
        const recetasApi = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`)
        recetasApi.data.results.map(async (r)=>{
            await Recipe.findOrCreate({ where: {
                id: r.id,
                name: r.title,
                resumen: r.summary,
                nivelSalud: r.healthScore,
                imagen: r.image,
                pasos: (r.analyzedInstructions[0] && r.analyzedInstructions[0].steps? r.analyzedInstructions[0].steps.map(s => s.step).join(" \n"):'')
            } })
        })
    } catch(err){
        console.log(err)
    }
}


module.exports = { getAllRecetas };