const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials' );

// Middleware | servir contenido estático
app.use( express.static('public') );

// Esta linea no se ejecuta porque el middleware se ejecuta primero y renderiza o sirve el contenido de la carpeta public
app.get('/', function (req, res) {
  res.render('home', {
    nombre: 'Mariano Jimenez',
    titulo: 'Aprendiendo node'
  });
});

app.get('/generic', function (req, res) {
  res.render('generic', {
    nombre: 'Mariano Jimenez',
    titulo: 'Aprendiendo node'
  });
});

app.get('/elements', function (req, res) {
  res.render('elements', {
    nombre: 'Mariano Jimenez',
    titulo: 'Aprendiendo node'
  });
});

// ESTA OPCION ES POR SI QUEREMOS RENDERIZAR UN ARCHIVO HTML
// app.get('/elements', function (req, res) {
//     res.sendFile( __dirname + '/public/elements.html' );
// });

app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html');
})


app.listen( port, () => {
    console.log(`Example app listening at http://localhost:${  port }`)
} ); 
