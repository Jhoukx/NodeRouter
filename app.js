import express from 'express';
import appUsuario from './routers/usuario.js';
const appExpress = express();


appExpress.use(express.json());
appExpress.use('/cliente',appUsuario);

const config ={
    hostname:"127.15.20.1",
    port: 5000
}

appExpress.listen(config,()=>{
    console.log(`listening on http://${config.hostname}:${config.port}`);
});