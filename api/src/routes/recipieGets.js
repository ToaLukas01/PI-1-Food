
const { recetasByNombre } = require("../controllers/getRecipiesName")
const { Router } = require('express');
const router = Router();

router.get("/?name", recetasByNombre);

module.exports = router
