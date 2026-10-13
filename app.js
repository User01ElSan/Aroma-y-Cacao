// app.js
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/db.config');

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());

// Conexión a MongoDB Atlas
connectDB();

// Servir archivos estáticos del cliente (HTML, CSS, JS, PWA)
app.use(express.static(path.join(__dirname, 'src/client')));

// Enrutamiento para las 5 páginas principales
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'src/client/index.html')));
app.get('/nosotros', (req, res) => res.sendFile(path.join(__dirname, 'src/client/nosotros.html')));
app.get('/carta', (req, res) => res.sendFile(path.join(__dirname, 'src/client/carta.html')));
app.get('/reservas', (req, res) => res.sendFile(path.join(__dirname, 'src/client/reservas.html')));
app.get('/contacto', (req, res) => res.sendFile(path.join(__dirname, 'src/client/contacto.html')));

// Puerto de ejecución
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});