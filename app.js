// app.js
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/db.config');

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());

// Servir archivos estáticos del cliente
app.use(express.static(path.join(__dirname, 'src/client')));

// Enrutamiento para las 5 páginas principales
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'src/client/index.html')));
app.get('/nosotros', (req, res) => res.sendFile(path.join(__dirname, 'src/client/nosotros.html')));
app.get('/carta', (req, res) => res.sendFile(path.join(__dirname, 'src/client/carta.html')));
app.get('/reservas', (req, res) => res.sendFile(path.join(__dirname, 'src/client/reservas.html')));
app.get('/contacto', (req, res) => res.sendFile(path.join(__dirname, 'src/client/contacto.html')));

// Puerto de ejecución y arranque de Express
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`=================================`);
    console.log(`¡Servidor ejecutándose en el puerto ${PORT}!`);
    console.log(`Páginas listas en http://localhost:${PORT}`);
    console.log(`=================================`);
});

// Conexión asíncrona a MongoDB Atlas (en segundo plano)
connectDB().catch(err => console.log('Aviso BD (Modo Offline/Red restringida):', err.message));