import { DataTypes } from "sequelize";
import { sequelize } from "../../db/db.js";
import { Temporada } from "./Temporada.js";
import { Equipo } from "./Equipo.js";

export const TablaPosiciones = sequelize.define("TablaPosiciones", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    temporada_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    equipo_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    puntos: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    goles_a_favor: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    goles_en_contra: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    tableName: "tabla_posiciones",
    timestamps: false
});

TablaPosiciones.belongsTo(Temporada, { foreignKey: "temporada_id" });
TablaPosiciones.belongsTo(Equipo, { foreignKey: "equipo_id" });