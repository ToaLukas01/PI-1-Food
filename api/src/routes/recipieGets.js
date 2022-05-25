
const { recetasByNombre } = require("../controllers/getRecipiesName")
const { Router } = require('express');
const router = Router();

router.get("/?name", recetasByNombre)

module.exports = router



//require('dotenv').config();
// const { Op, Recipe, Dietas } = require('../db');
// const axios = require('axios');
// const { API_KEY } = process.env
// const { Router } = require('express');
// const router = Router();

// async function getAllRecetas() {
//     try {
//         const recetasApi = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`)
//         recetasApi.data.results.map(async (r)=>{
//             await Recipe.findOrCreate({ where: {
//                 id: r.id,
//                 name: r.title,
//                 resumen: r.summary,
//                 nivelSalud: r.healthScore,
//                 imagen: r.image,
//                 pasos: (r.analyzedInstructions[0] && r.analyzedInstructions[0].steps? r.analyzedInstructions[0].steps.map(s => s.step).join(" \n"):'')
//             } })
//         })
//     } catch(err){
//         console.log(err)
//     }
// }

// const recetasByNombre = async (name)=> {
//     try {
//         const recetasNombre = await axios(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&addRecipeInformation=true&number=100&apiKey=${API_KEY}`)
//         recetasNombre.data.results.map(async (r)=>{
//             await Recipe.findOrCreate({ where: {
//                 id: r.id,
//                 name: r.title,
//                 resumen: r.summary,
//                 nivelSalud: r.healthScore,
//                 imagen: r.image,
//                 pasos: (r.analyzedInstructions[0] && r.analyzedInstructions[0].steps? r.analyzedInstructions[0].steps.map(s => s.step).join(" \n"):'')
//             } })
//         })
//         await recetasNombre.findAll( { where: {[Op.iLike]:`${name}`} })
//         return recetasNombre
//     } catch (err){
//         console.log(err)
//     }
// }



// router.get('/', async (req, res) => {
//     const { name } = req.query
//     if(name){
//         const recetas = recetasByNombre(name);
//         if (recetas){
//             return res.status(200).json(recetas)
//         } else {
//             return res.status(400).send("No se han encontrado recetas con ese nombre")
//         }
//     } else {
//         return res.status(404).send("No se a encontrado el nombre de receta que busca")
//     }
// });

// module.exports = router