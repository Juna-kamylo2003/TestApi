import { Usuario } from "../models/Usuario.js";

export const crearUsuario = async (req, res) => {
    try {
        const { nombre, email, password } = req.body;
        const nuevoUsuario = await Usuario.create({ nombre, email, password });
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const obtenerUsuarioPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const actualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, email, password } = req.body;
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        await usuario.update({ nombre, email, password });
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const eliminarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        await usuario.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
