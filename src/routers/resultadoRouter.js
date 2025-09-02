import { Router } from "express";
import { crearResultado, obtenerResultados, obtenerResultadoPorId, actualizarResultado, eliminarResultado } from "../controllers/resultadoController.js";

const router = Router();

router.post("/", crearResultado);
router.get("/", obtenerResultados);
router.get("/:id", obtenerResultadoPorId);
router.put("/:id", actualizarResultado);
router.delete("/:id", eliminarResultado);

export default router;
