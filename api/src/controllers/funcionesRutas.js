
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
    const tipos = ["Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", 
    "Vegan", "Pescetarian", "Paleo", "Primal", "Low FODMAP", "Whole30"];
    tipos.forEach(dieta => {
        Dietas.findOrCreate({ where: { name: dieta }})
    })
    const tipoDietas = await Dietas.findAll();
    return (tipoDietas)
};

async function crearReceta(id, name, resumen, nivelSalud, imagen, pasos, tipoDietas){
    const receta = await Recipe.create({
        id: id,
        name: name,
        resumen: resumen,
        nivelSalud: nivelSalud,
        imagen: imagen,
        pasos: pasos
    })
    const dieta = await Dietas.findAll({ where: { name: tipoDietas }})
    receta.addDietas(dieta);
    return receta
}

function validarAtributos(id, name, resumen, nivelSalud, imagen, pasos, tipoDietas){
    if(!id || (typeof id !== "number") || id < 0){
        return "El id de la receta debe existir y debe ser un numero enetro positivo"
    } else if (!name || (typeof name !== "string") || (name.length < 0) ){
        return "El nombre de la receta debe existir y debe ser una cadena de caracteres"
    } else if (!resumen || (typeof resumen !== "string") || (resumen.length < 0) ){
        return "El resumen de la receta debe existir y debe ser una cadena de texto"
    } else if (nivelSalud && typeof nivelSalud !== "number"){
        return "EL nivel de salud de la receta debe ser un numero o estar vacio"
    } else if (imagen && typeof imagen !== "string"){
        return "La imagen de la receta debe ser un link o estar vacia"
    } else if (pasos && typeof pasos !== "string" ){
        return "Los pasos a seguir de la receta debe ser una cadena de texto o estar vacios"
    // } else if (Array.isArray(tipoDietas)){
    //      for(let i=0; i<tipoDietas.length; i++){
    //          if (tipoDietas[i] !== "Gluten Free" || tipoDietas[i] !== "Ketogenic" || tipoDietas[i] !== "Vegetarian" || tipoDietas[i] !== "Lacto-Vegetarian" || tipoDietas[i] !== "Ovo-Vegetarian" || tipoDietas[i] !==  "Vegan" || tipoDietas[i] !== "Pescetarian" || tipoDietas[i] !== "Paleo" || tipoDietas[i] !== "Primal" ||tipoDietas[i] !== "Low FODMAP" ||tipoDietas[i] !== "Whole30"){
    //              return `El tipo de dieta (${tipoDietas[i]}) no es valido`
    //          }
    //      };
    //      return true
    // } else if (tipoDietas !== "Gluten Free" || tipoDietas !== "Ketogenic" || tipoDietas !== "Vegetarian" || tipoDietas !== "Lacto-Vegetarian" || tipoDietas !== "Ovo-Vegetarian" || tipoDietas !==  "Vegan" || tipoDietas !== "Pescetarian" || tipoDietas !== "Paleo" || tipoDietas !== "Primal" ||tipoDietas !== "Low FODMAP" ||tipoDietas !== "Whole30"){
    //     return "El tipo de dieta a ingresar debe ser uno valido"
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