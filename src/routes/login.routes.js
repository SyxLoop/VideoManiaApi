import { Router } from "express";
import { Login } from "../controllers/login.controllers.js"

const router = Router();

router.post("/login", Login);

export default router;
