import { Temporada } from "../models/Temporada.js";
import { Liga } from "../models/Liga.js";

export const crearTemporada = async (req, res) => {
    try {
        const { anio, liga_id } = req.body;
        const nuevaTemporada = await Temporada.create({ anio, liga_id });
        res.status(201).json(nuevaTemporada);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const obtenerTemporadas = async (req, res) => {
    try {
        const temporadas = await Temporada.findAll({
            include: [{ model: Liga }]
        });
        res.status(200).json(temporadas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const obtenerTemporadaPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const temporada = await Temporada.findByPk(id);
        if (!temporada) {
            return res.status(404).json({ error: "Temporada no encontrada" });
        }
        res.status(200).json(temporada);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const actualizarTemporada = async (req, res) => {
    try {
        const { id } = req.params;
        const { anio, liga_id } = req.body;
        const temporada = await Temporada.findByPk(id);
        if (!temporada) {
            return res.status(404).json({ error: "Temporada no encontrada" });
        }
        await temporada.update({ anio, liga_id });
        res.status(200).json(temporada);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const eliminarTemporada = async (req, res) => {
    try {
        const { id } = req.params;
        const temporada = await Temporada.findByPk(id);
        if (!temporada) {
            return res.status(404).json({ error: "Temporada no encontrada" });
        }
        await temporada.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
