const express = require("express");
const app = express();
const PORT = 8080;

const mascotasRouter = require("./routes/mascotas");

app.use(express.json()); //Parsea el req.body a json
app.use("/", mascotasRouter);

app.listen(PORT, () => {
	console.log(``);
});
