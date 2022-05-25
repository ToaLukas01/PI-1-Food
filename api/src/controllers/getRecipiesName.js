
//const { getAllRecetas } = require("./getRecipiesAPI");
require('dotenv').config();
const { Op, Recipe, Dietas } = require('../db');
const axios = require('axios');
const { API_KEY } = process.env

const nombreApi = async (name)=> {
    try {
        const recetasNombre = await axios(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&addRecipeInformation=true&apiKey=${API_KEY}`)
        recetasNombre.data.results.map(async (r)=>{
            await Recipe.findOrCreate({ where: {
                id: r.id,
                name: r.title,
                resumen: r.summary,
                nivelSalud: r.healthScore,
                imagen: r.image,
                pasos: (r.analyzedInstructions[0] && r.analyzedInstructions[0].steps? r.analyzedInstructions[0].steps.map(s => s.step).join(" \n"):'')
            } })
        })
        // await recetasNombre.findAll( { where: {[Op.iLike]:`${name}`} })
        // return recetasNombre
    } catch (err){
        console.log(err)
    }
}


const recetasByNombre = async (req, res)=> {
    try {
        const { name } = req.query
        const recetas = await nombreApi(name);
        if(recetas){
            if(name){
                const recetasNombre = await Recipe.findAll( { where: {[Op.iLike]:`%${name}%`} })
                if(recetasNombre){
                    return res.status(200).json(recetasNombre)
                } else {
                    return res.status(404).send("No se han encontrado recetas con ese nombre")
                }  
            } else {
                return res.status(404).send("No se a encontrado el nombre de receta que busca")
            }
        } else {
            return res.status(404).send("No se han encontrado las recetas")
        }
    } catch (err){
        console.log(err)
    }
}

module.exports = { recetasByNombre }
