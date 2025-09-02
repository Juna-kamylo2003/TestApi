import { DataTypes } from "sequelize";
import { sequelize } from "../../db/db.js";
import { Temporada } from "./Temporada.js";

export const Equipo=sequelize.define("Equipo",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    ciudad:{
        type:DataTypes.STRING,
        allowNull:false
    },
    temporada_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

},
{
    tableName:"equipos",
    timestamps:false
}
)

Equipo.belongsTo(Temporada,{foreignKey:"temporada_id"});
Temporada.hasMany(Equipo,{foreignKey:"temporada_id"});