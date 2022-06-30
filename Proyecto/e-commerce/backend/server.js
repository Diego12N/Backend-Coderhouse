const express = require("express");
const app = express();
const PORT = 8080;

const productosRutas = require("./routes/productos");

app.use(express.json());
app.use("/api/productos", productosRutas);

app.listen(PORT, () => {
	console.log("Server is running");
});
