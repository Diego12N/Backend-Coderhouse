const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/datos", (req, res) => {
	const {min, nivel, max, titulo} = req.query;
	res.render("nivel.pug", {min, nivel, max, titulo});
});

app.listen(PORT, () => {
	console.log(`server running on port ${PORT}`);
});
