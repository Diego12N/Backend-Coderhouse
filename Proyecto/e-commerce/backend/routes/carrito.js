const routes = require("express").Router();
const moduleContenedor = require("../helpers/contenedor");
const contenedor = new moduleContenedor.contenedor("./data/products.txt");

routes.get("/:id/productos", (req, res) => {});

routes.post("/", (req, res) => {});

routes.post("/:id/productos", (req, res) => {});

routes.delete("/:id", (req, res) => {});

routes.delete("/:id/productos/:id_prod", (req, res) => {});
