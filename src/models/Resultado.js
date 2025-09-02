import { DataTypes } from "sequelize";
import { sequelize } from "../../db/db.js";
import { Partido } from "./Partido.js";

export const Resultado = sequelize.define("Resultado", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    partido_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    goles_local: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    goles_visitante: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: "resultados",
    timestamps: false
});

Resultado.belongsTo(Partido, { foreignKey: "partido_id" });
Partido.hasOne(Resultado, { foreignKey: "partido_id" });