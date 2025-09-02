import { Equipo } from "../models/Equipo.js";
import { Partido } from "../models/Partido.js";
import { Temporada } from "../models/Temporada.js";


export const crearPartido = async (req, res) => {
    try {
        const { fecha, equipo_local, equipo_visitante, temporada_id } = req.body;
        const nuevoPartido = await Partido.create({ fecha, equipo_local, equipo_visitante, temporada_id });
        res.status(201).json(nuevoPartido);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const obtenerPartidos = async (req, res) => {
    try {
        const partidos = await Partido.findAll({
            include:[
                {model: Equipo, as: "Local"},
                {model: Equipo, as: "Visitante"},
                {model:Temporada}
            ]
        });
        res.status(200).json(partidos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const obtenerPartidoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const partido = await Partido.findByPk(id);
        if (!partido) {
            return res.status(404).json({ error: "Partido no encontrado" });
        }
        res.status(200).json(partido);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const actualizarPartido = async (req, res) => {
    try {
        const { id } = req.params;
        const { fecha, equipo_local, equipo_visitante, temporada_id } = req.body;
        const partido = await Partido.findByPk(id);
        if (!partido) {
            return res.status(404).json({ error: "Partido no encontrado" });
        }
        await partido.update({ fecha, equipo_local, equipo_visitante, temporada_id });
        res.status(200).json(partido);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
export const eliminarPartido = async (req, res) => {
    try {
        const { id } = req.params;
        const partido = await Partido.findByPk(id);
        if (!partido) {
            return res.status(404).json({ error: "Partido no encontrado" });
        }
        await partido.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};