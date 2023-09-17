import express from "express";
import usuariosRoutes from "./routes/usuarios.routes.js";
import login from "./routes/login.routes.js";

const app = express();

app.use(express.json());

app.use(login);
app.use(usuariosRoutes);

app.listen(3000);
console.log("server is running on port 3000");
