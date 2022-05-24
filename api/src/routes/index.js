const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Op, Recipe, Dietas } = require('../db');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/recipes/name", async(req, res, next)=>{

});

router.get("/recipes/id", async(req, res, next)=>{

});

router.get("/type", async(req, res, next)=>{

});

router.get("/recipes", async(req, res, next)=>{

});

module.exports = router;
