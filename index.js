//Archivo principal de todo el codigo 
const express = require("express");
const morgan = require("morgan"); 
const cors = require("cors"); 

const routerApiV1 = require("./server/routes/index"); 

const app = express();
const port = 5000; 

//Función que esta constantemente activa, todas las funciones que este debajo de dicha función seran controladas por el use
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//get, put, delte, patch 
//get proporciona información
app.get("/get", (req, res) => {
    return res.status(200).send('¡Hola desde express! :D')
});

//Se esparce unicamnete llamando la ruta api V1
app.use("/api/v1", routerApiV1);

//Es función es anonima porque, como tal, no se le asigna un nombre
app.listen(port, () => {
    console.log("Escuchando desde el puerto" + port)
});
