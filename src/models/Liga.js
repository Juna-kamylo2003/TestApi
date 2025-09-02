import { DataTypes } from "sequelize";
import { sequelize } from "../../db/db.js";

export const Liga=sequelize.define("Liga",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull:false
    },
    pais:{
        type:DataTypes.STRING,
        allowNull:false
    }
},
{
    tableName:"ligas",
    timestamps:false
}
)