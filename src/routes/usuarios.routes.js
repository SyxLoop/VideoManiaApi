import { Router } from "express";
import {
    createUsuarios,
    getUsuarios,
    updateUsuarios,
    deleteUsuarios,
    getUsuariosByID,
} from "../controllers/usuarios.controllers.js";

const router = Router();

router.post("/registrar-usuario", createUsuarios);
router.get("/usuarios", getUsuarios);
router.get("/usuario-id/:id", getUsuariosByID);
router.put("/actualizar-usuario/:id", updateUsuarios);
router.delete("/eliminar-usuario/:id", deleteUsuarios);

export default router;
