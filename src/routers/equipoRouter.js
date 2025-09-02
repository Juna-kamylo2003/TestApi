import { Router } from "express";
import { crearEquipo, obtenerEquipos, obtenerEquipoPorId, actualizarEquipo, eliminarEquipo } from "../controllers/equipoController.js";

const router = Router();

router.post("/", crearEquipo);
router.get("/", obtenerEquipos);
router.get("/:id", obtenerEquipoPorId);
router.put("/:id", actualizarEquipo);
router.delete("/:id", eliminarEquipo);

export default router;
