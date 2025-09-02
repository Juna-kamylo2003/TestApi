import { Jugador } from "../models/Jugador.js";
import { Equipo } from "../models/Equipo.js";

export const crearJugador = async (req, res) => {
    try {
        const { nombre, posicion, edad, equipo_id } = req.body;
        const nuevoJugador = await Jugador.create({ nombre, posicion, edad, equipo_id });
        res.status(201).json(nuevoJugador);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const obtenerJugadores = async (req, res) => {
    try {
        const jugadores = await Jugador.findAll({
            include: [{ model: Equipo }]
        });
        res.status(200).json(jugadores);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const obtenerJugadorPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const jugador = await Jugador.findByPk(id);
        if (!jugador) {
            return res.status(404).json({ error: "Jugador no encontrado" });
        }
        res.status(200).json(jugador);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const actualizarJugador = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, posicion, edad, equipo_id } = req.body;
        const jugador = await Jugador.findByPk(id);
        if (!jugador) {
            return res.status(404).json({ error: "Jugador no encontrado" });
        }
        await jugador.update({ nombre, posicion, edad, equipo_id });
        res.status(200).json(jugador);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const eliminarJugador = async (req, res) => {
    try {
        const { id } = req.params;
        const jugador = await Jugador.findByPk(id);
        if (!jugador) {
            return res.status(404).json({ error: "Jugador no encontrado" });
        }
        await jugador.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
