import { DataTypes } from "sequelize";
import { sequelize } from "../../db/db.js";
import { Equipo } from "./Equipo.js";

export const Jugador=sequelize.define("Jugador",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    posicion:{
        type:DataTypes.STRING,
        allowNull:false
    },
    edad:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    equipo_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

},
{
    tableName:"jugadores",
    timestamps:false
}
);

Jugador.belongsTo(Equipo,{foreignKey:"equipo_id"});
Equipo.hasMany(Jugador,{foreignKey:"equipo_id"});