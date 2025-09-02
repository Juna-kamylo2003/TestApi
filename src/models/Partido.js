import { DataTypes } from "sequelize";
import { sequelize } from "../../db/db.js";
import { Equipo } from "./Equipo.js";
import { Temporada } from "./Temporada.js";

export const Partido = sequelize.define("Partido", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false
    },
    equipo_local: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    equipo_visitante: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    temporada_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: "partidos",
    timestamps: false
});

Partido.belongsTo(Equipo, { as: "Local", foreignKey: "equipo_local" });
Partido.belongsTo(Equipo, { as: "Visitante", foreignKey: "equipo_visitante" });
Partido.belongsTo(Temporada, { foreignKey: "temporada_id" });