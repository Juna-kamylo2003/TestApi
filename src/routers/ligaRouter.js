import { Router } from "express";
import { crearLiga, obtenerLigas, obtenerLigaPorId, actualizarLiga, eliminarLiga } from "../controllers/ligaController.js";

const router = Router();

router.post("/", crearLiga);
router.get("/", obtenerLigas);
router.get("/:id", obtenerLigaPorId);
router.put("/:id", actualizarLiga);
router.delete("/:id", eliminarLiga);

export default router;
