import { Equipo } from "../models/Equipo.js";
import { Temporada } from "../models/Temporada.js";

export const crearEquipo = async (req, res) => {
    try {
        const { nombre, ciudad, temporada_id } = req.body;
        const nuevoEquipo = await Equipo.create({ nombre, ciudad, temporada_id });
        res.status(201).json(nuevoEquipo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const obtenerEquipos = async (req, res) => {
    try {
        const equipos = await Equipo.findAll({
            include: [{ model: Temporada }]
        });
        res.status(200).json(equipos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const obtenerEquipoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const equipo = await Equipo.findByPk(id);
        if (!equipo) {
            return res.status(404).json({ error: "Equipo no encontrado" });
        }
        res.status(200).json(equipo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const actualizarEquipo = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, ciudad, temporada_id } = req.body;
        const equipo = await Equipo.findByPk(id);
        if (!equipo) {
            return res.status(404).json({ error: "Equipo no encontrado" });
        }
        await equipo.update({ nombre, ciudad, temporada_id });
        res.status(200).json(equipo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const eliminarEquipo = async (req, res) => {
    try {
        const { id } = req.params;
        const equipo = await Equipo.findByPk(id);
        if (!equipo) {
            return res.status(404).json({ error: "Equipo no encontrado" });
        }
        await equipo.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
