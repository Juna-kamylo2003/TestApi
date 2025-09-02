import { Router } from "express";
import { crearJugador, obtenerJugadores, obtenerJugadorPorId, actualizarJugador, eliminarJugador } from "../controllers/jugadorController.js";

const router = Router();

router.post("/", crearJugador);
router.get("/", obtenerJugadores);
router.get("/:id", obtenerJugadorPorId);
router.put("/:id", actualizarJugador);
router.delete("/:id", eliminarJugador);

export default router;
