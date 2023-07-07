import {Router} from 'express';
import mysql from 'mysql2';
const appUsuario = Router();
let con = undefined;

appUsuario.use((req,res,next)=>{
    con = mysql.createPool({
        host: '172.16.49.20',
        user:'sputnik',
        password: 'Sp3tn1kC@',
        database:'db_M3_prueba_MYSQL2_node_JohnGonzalez',
        port: 3306
    });
    next();
});

//appUsuario.get('/:id?',(req, res) => {
//    console.log("Buena conexión :D");
//    res.send();
//    //res.status(200).send('Successfully')
//});

appUsuario.get('/:id?',(req, res) => {
    (req.params.id)?
    con.query(
        `SELECT * FROM tb_usuario_M3  WHERE id =${req.params.id}`,
        (err,data,fils)=>{
            console.log(err);
            console.log(data);
            console.log(fils);
            res.send(data);
        }
    )
    :
    con.query(
        `SELECT * FROM tb_usuario_M3`,
        (err,data,fils)=>{
            console.log(err);
            console.log(data);
            console.log(fils);
            res.send(data);
        }
    );
});

appUsuario.post('/',(req, res) => {
    con.query(
        /*SQL*/ `INSERT INTO tb_usuario_M3 SET ?`,
        req.body,
        (err,data,fils)=>{
            console.log(err);
            console.log(data);
            console.log(fils);
            res.send();
        }
    );
});

appUsuario.put('/:id',(req,res)=>{
    con.query(
        /*sql*/ `UPDATE tb_usuario_M3 SET ? WHERE id = ?`,
        [req.body,req.params.id],
        (err,data,fils)=>{
            console.log(err);
            console.log(data);
            console.log(fils);
            res.send();
        }

    )
});

appUsuario.delete('/:id',(req,res)=>{
    con.query(
        /*sql*/ `DELETE FROM tb_usuario_M3 WHERE id = ?`,
        req.params.id,
        (err,data,fils)=>{
            console.log(err);
            console.log(data);
            console.log(fils);
            res.send();
        }

    )
});

export default appUsuario;