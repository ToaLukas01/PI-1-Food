
const { Router } = require('express');
const router = Router();

const recetasNombre = require("./recipieGets")



router.use("/recipes", recetasNombre)

module.exports = router;
