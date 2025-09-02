import { TablaPosiciones } from "../models/TablaPosiciones.js";
import { Temporada } from "../models/Temporada.js";
import { Equipo } from "../models/Equipo.js";

export const crearTablaPosicion = async (req, res) => {
    try {
        const { temporada_id, equipo_id, puntos, goles_a_favor, goles_en_contra } = req.body;
        const nuevaPosicion = await TablaPosiciones.create({ temporada_id, equipo_id, puntos, goles_a_favor, goles_en_contra });
        res.status(201).json(nuevaPosicion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const obtenerTablaPosiciones = async (req, res) => {
    try {
        const posiciones = await TablaPosiciones.findAll({
            include: [
                { model: Temporada },
                { model: Equipo }
            ]
        });
        res.status(200).json(posiciones);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const obtenerPosicionPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const posicion = await TablaPosiciones.findByPk(id);
        if (!posicion) {
            return res.status(404).json({ error: "Posición no encontrada" });
        }
        res.status(200).json(posicion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const actualizarPosicion = async (req, res) => {
    try {
        const { id } = req.params;
        const { temporada_id, equipo_id, puntos, goles_a_favor, goles_en_contra } = req.body;
        const posicion = await TablaPosiciones.findByPk(id);
        if (!posicion) {
            return res.status(404).json({ error: "Posición no encontrada" });
        }
        await posicion.update({ temporada_id, equipo_id, puntos, goles_a_favor, goles_en_contra });
        res.status(200).json(posicion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const eliminarPosicion = async (req, res) => {
    try {
        const { id } = req.params;
        const posicion = await TablaPosiciones.findByPk(id);
        if (!posicion) {
            return res.status(404).json({ error: "Posición no encontrada" });
        }
        await posicion.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
