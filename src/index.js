// Importamos el módulo Express y lo asignamos a la variable 'express'.
const express = require("express");
// Creamos una instancia de la aplicación Express y la asignamos a la variable 'app'.
const app = express();
const morgan = require("morgan");

//setting

app.set("port", process.env.PORT||8080);
app.set('json space', 2);

//middlewares

app.use(morgan("dev"));
app.use(express.urlencoded({extends:false}));
// Middleware para analizar el cuerpo de las solicitudes entrantes con formato JSON
app.use(express.json());

//routers

//cargar el archivo index.js que se encuentra en la carpeta routes de nuestro proyecto. solicitudes http
app.use(require('./routes/index.js'));
 
 
//starting the server
app.listen(8080, () => {
    console.log(`Servidor corriendo en el puerto 8080`);
  });