import { Router } from "express";
import { crearTablaPosicion, obtenerTablaPosiciones, obtenerPosicionPorId, actualizarPosicion, eliminarPosicion } from "../controllers/tablaPosicionesController.js";

const router = Router();

router.post("/", crearTablaPosicion);
router.get("/", obtenerTablaPosiciones);
router.get("/:id", obtenerPosicionPorId);
router.put("/:id", actualizarPosicion);
router.delete("/:id", eliminarPosicion);

export default router;
