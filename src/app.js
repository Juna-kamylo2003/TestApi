import express from 'express';
import { testConnection } from '../db/db.js';
import equipoRouter from './routers/equipoRouter.js';
import jugadorRouter from './routers/jugadorRouter.js';
import ligaRouter from './routers/ligaRouter.js';
import partidoRouter from './routers/partidoRouter.js';
import resultadoRouter from './routers/resultadoRouter.js';
import tablaPosicionesRouter from './routers/tablaPosicionesRouter.js';
import temporadaRouter from './routers/temporadaRouter.js';
import usuarioRouter from './routers/usuarioRouter.js';

const app= express();
app.use(express.json());

await testConnection();

app.use("/api/equipos", equipoRouter);
app.use("/api/jugadores", jugadorRouter);
app.use("/api/ligas", ligaRouter);
app.use("/api/partidos", partidoRouter);
app.use("/api/resultados", resultadoRouter);
app.use("/api/tabla-posiciones", tablaPosicionesRouter);
app.use("/api/temporadas", temporadaRouter);
app.use("/api/usuarios", usuarioRouter);



app.get("/",(req,res)=>{
    res.send("API is working")
});

app.listen(process.env.APP_PORT || 3000,()=>{
    console.log(`el servidor esta corriendo en http://localhost:${process.env.APP_PORT}`);
});