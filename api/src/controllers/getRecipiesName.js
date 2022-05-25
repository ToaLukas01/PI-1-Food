
const { getAllRecetas } = require("./getRecipiesAPI");
const { Op, Recipe, Dietas } = require('../db');

const recetasByNombre = async (req, res)=> {
    try {
        const { name } = req.query
        const recetas = await getAllRecetas(name);
        if(recetas){
            if(name){
                const recetasNombre = await Recipe.findAll( { where: {[Op.iLike]:`${name}`} })
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
