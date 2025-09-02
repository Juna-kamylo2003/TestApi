import { sequelize } from "../../db/db.js";
import { DataTypes, HasMany } from "sequelize";
import { Liga } from "./Liga.js";

export const Temporada= sequelize.define("Temporada",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    anio:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    liga_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
    }
},{
    tableName:"temporadas",
    timestamps:false
});

Temporada.belongsTo(Liga,{foreignKey:"liga_id"});
Liga.hasMany(Temporada,{foreignKey:"liga_id"});
