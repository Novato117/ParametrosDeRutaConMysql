const express = require('express')
const app = express()

const connection = require('./juego_database');
app.get('/', (req, res) => {
    const sql = "SELECT * FROM todos_los_videojuegos";
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Result: ", result);
        res.send(JSON.stringify(result));
    });
})
app.get('/api/halo', (req, res) => {
    const sql = "SELECT * FROM todos_los_videojuegos";
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Result: ", result);
        res.send(JSON.stringify(result[0]));
    });
})
app.get('/api/:juego', (req, res) => {
    const sql = "SELECT * FROM todos_los_videojuegos";
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Result: ", result);
        const juego = req.params.juego;
        console.log(juego);
        const resultado = result.filter(curso => curso.nombre == juego)
        if (resultado.length === 0) {
            return res.status(404).send(`No se encontraron juegos de ${juego}`)
        }
        res.send(JSON.stringify(resultado));
    });
})
app.listen(3000, () => {
    console.log("escuchando el spuerto 3000");
})