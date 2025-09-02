import { Liga } from "../models/Liga.js";

export const crearLiga = async (req, res) => {
    try {
        const { nombre, pais } = req.body;
        const nuevaLiga = await Liga.create({ nombre, pais });
        res.status(201).json(nuevaLiga);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const obtenerLigas = async (req, res) => {
    try {
        const ligas = await Liga.findAll();
        res.status(200).json(ligas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const obtenerLigaPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const liga = await Liga.findByPk(id);
        if (!liga) {
            return res.status(404).json({ error: "Liga no encontrada" });
        }
        res.status(200).json(liga);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const actualizarLiga = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, pais } = req.body;
        const liga = await Liga.findByPk(id);
        if (!liga) {
            return res.status(404).json({ error: "Liga no encontrada" });
        }
        await liga.update({ nombre, pais });
        res.status(200).json(liga);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const eliminarLiga = async (req, res) => {
    try {
        const { id } = req.params;
        const liga = await Liga.findByPk(id);
        if (!liga) {
            return res.status(404).json({ error: "Liga no encontrada" });
        }
        await liga.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
