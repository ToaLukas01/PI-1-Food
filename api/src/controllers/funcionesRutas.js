
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
};

async function getDbRecetas (){
    return await Recipe.findAll({ include: {
        model: Dietas,
        attributes: ["name"],
        through: {
            attributes: []
        }
    }})
};

async function getAllRecetas(){
    const recetasApi = await getApiRecetas();
    const recetasDb = await getDbRecetas();
    const recetas = await recetasApi.concat(recetasDb);
    return recetas
};

async function crearDietas(){
    const tipos = ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan", "paleolithic", "primal", "whole 30",
    "fodmap friendly", "vegetarian", "pescatarian", "ketogenic"];
    tipos.forEach(dieta => {
        Dietas.findOrCreate({ where: { name: dieta }})
    })
    const tipoDietas = await Dietas.findAll();
    return (tipoDietas)
};

async function crearID(){
    const allRecipes = await Recipe.findAll();
    const allID = allRecipes.map(r => { return r.id })
    let id = Math.floor(Math.random()*123456)
    while(allID.includes(id)){
        id = Math.floor(Math.random()*123456)
    }
    return id
};


async function crearReceta(name, resumen, nivelSalud, imagen, pasos, tipoDietas){
    const id = await crearID()
    const receta = await Recipe.create({
        id: id,
        name: name,
        resumen: resumen,
        nivelSalud: nivelSalud,
        imagen: imagen,
        pasos: pasos
    })
    tipoDietas.map(async(diet) => {const dieta = await Dietas.findOne({ where: { name: diet }})
    await receta.addDietas(dieta); })
    return receta
}

function validarAtributos(name, resumen, nivelSalud, imagen, pasos, tipoDietas){
    if (!name || (typeof name !== "string") || (name.length < 0) ){
        return "El nombre de la receta debe existir y debe ser una cadena de caracteres"
    } else if (!resumen || (typeof resumen !== "string") || (resumen.length < 0) ){
        return "El resumen de la receta debe existir y debe ser una cadena de texto"
    } else if (nivelSalud && typeof nivelSalud !== "number"){
        return "EL nivel de salud de la receta debe ser un numero o estar vacio"
    } else if (imagen && typeof imagen !== "string"){
        return "La imagen de la receta debe ser un link o estar vacia"
    } else if (pasos && typeof pasos !== "string" ){
        return "Los pasos a seguir de la receta debe ser una cadena de texto o estar vacios"
    } else {
        return true
    }
}

module.exports = {
    getApiRecetas,
    getDbRecetas,
    getAllRecetas,
    crearDietas,
    crearReceta,
    validarAtributos,
};