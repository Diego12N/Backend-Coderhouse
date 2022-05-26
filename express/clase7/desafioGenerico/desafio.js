const express = require("express");
const app = express();
const PORT = 8080;

app.get("/api/sumar/:num1/:num2", (req, res) => {
	const num1 = parseInt(req.params.num1);
	const num2 = parseInt(req.params.num2);

	res.status(200).send(`Resultado: ${num1 + num2}`);
});

app.get("/api/sumar", (req, res) => {
	//   /sumar?num=5&num2=62  query   =
	const num1 = parseInt(req.query.num1);
	const num2 = parseInt(req.query.num2);

	res.status(200).send(`Resultado: ${num1 + num2}`);
});

app.get("/api/operacion/:nums", (req, res) => {
	const nums = eval(req.params.nums);

	res.status(200).send(`Resultado: ${nums}`);
});

app.post("/api", (req, res) => {
	res.status(200).send(`ok`);
});

app.listen(PORT, () => {
	console.log(` ${PORT}`);
});
