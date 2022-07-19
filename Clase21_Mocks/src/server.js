import express from "express";
import usuariosRoutes from "./routes/usuarios";
const app = express();
const PORT = 4030;

app.use(express.json());
app.use("/api/usuarios", usuariosRoutes);

app.listen(PORT, () => {
	console.log(`Escuchando al puerto ${PORT}`);
});
