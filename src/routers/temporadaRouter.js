import { Router } from "express";
import { crearTemporada, obtenerTemporadas, obtenerTemporadaPorId, actualizarTemporada, eliminarTemporada } from "../controllers/temporadaController.js";

const router = Router();

router.post("/", crearTemporada);
router.get("/", obtenerTemporadas);
router.get("/:id", obtenerTemporadaPorId);
router.put("/:id", actualizarTemporada);
router.delete("/:id", eliminarTemporada);

export default router;
