const router = require("express").Router();
const {mostrarProductos} = require("../controllers/productos.js");

router.get("/", mostrarProductos);

module.exports = router;
