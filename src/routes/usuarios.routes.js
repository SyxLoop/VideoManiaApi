import { Router } from "express";
import {
    createUsuarios,
    getUsuarios,
    updateUsuarios,
    deleteUsuarios,
    getUsuariosByID,
} from "../controllers/usuarios.controllers.js";

const router = Router();

router
    .post("/registrar-usuario", createUsuarios)
    .get("/usuarios", getUsuarios)
    .get("/usuario/:id", getUsuariosByID)
    .put("/actualizar/:id", updateUsuarios)
    .delete("/eliminar/:id", deleteUsuarios);

export default router;
