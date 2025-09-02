import {Sequelize} from "sequelize";
import dotenv from "dotenv";


dotenv.config();
const melo =process.env;

export const sequelize= new Sequelize(
    melo.DB_NAME,
    melo.DB_USER,
    melo.DB_PASS || "",
    {
        host:melo.DB_HOST || 'localhost',
        port:melo.DB_PORT ? parseInt(melo.DB_PORT):3306,
        dialect:'mysql',
        logging:true,
        define:{
            timestamps:true,
            underscored:true
        }
    } 
);

export async function testConnection(){
    try{
        await sequelize.authenticate();
        console.log("eso esta melo viejo")
    }catch(err){
        console.error("Error de conexión:", err)
        throw err;
    }
}