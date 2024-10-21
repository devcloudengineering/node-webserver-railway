require("dotenv").config();
const express = require("express");
const app = express();
// TODO: require('hbs) MVC (Modelo, Vista, Controlador) SSR -> Server Side Rendering
const hbs = require("hbs");

// por convencion el framework express busca siempre el archivo index.html
// cuando uno sirve contenido estatico html desde el middleware lo que hace node js es primero buscar contenido / rutas configuradas por express primero en el directorio publico y si no encuentra coincidencias despues busca en las rutas propiamente tal
// nodemon por defecto solo escucha los archivos js, por lo que si hacemos cambios en html hay que volver a ejecutar nodemon

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static("public")); // directorio ./public

// servir contenido estatico

app.get("/", (req, res) => {
  res.render("home.hbs", {
    titulo: "Nodejs",
    nombre: "Gustavo Creado",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic.hbs", {
    titulo: "Nodejs",
    nombre: "Gustavo Creado",
  });
});
app.get("/elements", (req, res) => {
  res.render("elements.hbs", {
    titulo: "Nodejs",
    nombre: "Gustavo Creado",
  });
});

app.get("*", (req, res) => {
  //   res.send("ERROR 404 | NOT FOUND");
  // __dirname corresponde a la carpeta global del proyecto y __filename da la ruta hasta el archivo que estamos ejecutando en este caso index.js
  res.sendFile(__dirname + "/public/error/error.html");
});

app.listen(process.env.PORT, () => {
  console.log("Servidor escuchando en el puerto:", process.env.PORT);
});
