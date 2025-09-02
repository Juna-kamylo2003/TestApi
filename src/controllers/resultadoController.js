import { Resultado } from "../models/Resultado.js";
import { Partido } from "../models/Partido.js";

export const crearResultado = async (req, res) => {
    try {
        const { partido_id, goles_local, goles_visitante } = req.body;
        const nuevoResultado = await Resultado.create({ partido_id, goles_local, goles_visitante });
        res.status(201).json(nuevoResultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const obtenerResultados = async (req, res) => {
    try {
        const resultados = await Resultado.findAll({
            include: [{ model: Partido }]
        });
        res.status(200).json(resultados);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const obtenerResultadoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await Resultado.findByPk(id);
        if (!resultado) {
            return res.status(404).json({ error: "Resultado no encontrado" });
        }
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const actualizarResultado = async (req, res) => {
    try {
        const { id } = req.params;
        const { partido_id, goles_local, goles_visitante } = req.body;
        const resultado = await Resultado.findByPk(id);
        if (!resultado) {
            return res.status(404).json({ error: "Resultado no encontrado" });
        }
        await resultado.update({ partido_id, goles_local, goles_visitante });
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const eliminarResultado = async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await Resultado.findByPk(id);
        if (!resultado) {
            return res.status(404).json({ error: "Resultado no encontrado" });
        }
        await resultado.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
