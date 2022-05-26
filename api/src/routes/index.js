
const { Router } = require('express');
const router = Router();
const { getApiRecetas, getDbRecetas, getAllRecetas} =require("../controllers/funcionesRutas")
const { Op, Recipe, Dietas } = require('../db');


// GET /recipes?name="...":
// Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
// Si no existe ninguna receta mostrar un mensaje adecuado
router.get("/recipes", async(req, res, next)=>{
    try {
        const { name } = req.query
        const recetas = await getAllRecetas();
        if(name){
            const recetasNombre = recetas.filter(n => n.name.toLowerCase().includes(name.toLowerCase()));
            if(recetasNombre.length > 0){
                return res.json(recetasNombre)
            } else {
                return res.status(404).send("No se encontraron las recetas con ese nombre :( ");
            }
        } else {
            return res.json(recetas);
        }  
    } catch (err){
        next(err);
    }   
});

// GET /recipes/{idReceta}:
// Obtener el detalle de una receta en particular
// Debe traer solo los datos pedidos en la ruta de detalle de receta
// Incluir los tipos de dieta asociados
router.get("/recipes/:id", async(req, res, next)=>{
    try {
        const id  = req.params.id;
        const recetas = await getAllRecetas();
        if(id){
            const recetasID = recetas.filter(i => i.id.toString() === id.toString()); 
            if(recetasID.length > 0){
               return res.json(recetasID);
            } else {
                return res.status(404).send("No se encontro la receta buscada")
            } 
        } 
    } catch (err){
        next(err)
    }
});

// POST /recipes:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
// Crea una receta en la base de datos relacionada con sus tipos de dietas.
router.post("/recipes", async(req, res, next)=>{
    try {
        const { id, name, resumen, nivelSalud, imagen, pasos, tipoDietas } = req.body
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
        if(receta){
            return res.status(201).send("Receta creada exitosamente")
        } else {
            return res.status(404).send("No se pudo crear la receta")
        }
    } catch (err){
        next(err)
    }
});




// GET /diets:
// Obtener todos los tipos de dieta posibles
// En una primera instancia, cuando no exista ninguno, 
// deberán precargar la base de datos con los tipos de datos indicados por spoonacular
router.get("/diets", async(req, res, next)=>{
    const tipos = ["Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", 
    "Vegan", "Pescetarian", "Paleo", "Primal", "Low FODMAP", "Whole30"]
    try {
        tipos.forEach(dieta => {
            Dietas.findOrCreate({ where: { name: dieta }})
        })
        const tipoDietas = await Dietas.findAll();
        return res.send(tipoDietas)
    } catch (err){
        next(err)
    }
});

module.exports = router;
