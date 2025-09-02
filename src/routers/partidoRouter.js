import { Router } from "express";
import { crearPartido,obtenerPartidos,obtenerPartidoPorId,actualizarPartido,eliminarPartido } from "../controllers/partidoController.js";

const router=Router();

router.post("/", crearPartido);
router.get("/", obtenerPartidos);
router.get("/:id", obtenerPartidoPorId);
router.put("/:id", actualizarPartido);
router.delete("/:id", eliminarPartido);

export default router;
