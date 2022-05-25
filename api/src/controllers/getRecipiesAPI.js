
const { Recipe, Dietas } = require('../db');
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

// urlApi.data.results.map(async (r) =>{
//     await Recipe.findOrCreate({  //** lo concatena (o guarda) en la base de datos
//          where: {
//             id: r.id,
//             name: r.title,
//             summary: r.summary,
//             healthScore: r.healthScore,
//             steps: (r.analyzedInstructions[0] && r.analyzedInstructions[0].steps? r.analyzedInstructions[0].steps.map(s => s.step).join(" \n"):''),
//             //r.analyzedInstructions[0]?.steps[0].step ? pasos  : '', 

//             image: r.image,
//          }
//      })
//  })

// } catch (error) {
//  console.log(error)
// }
// }


module.exports = { getAllRecetas };