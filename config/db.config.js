const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const connectDB = async () => {
  try {
    const connStr = process.env.MONGO_URI;
    if (!connStr) throw new Error("No se encontró MONGO_URI en el archivo .env");

    console.log('Conectando a MongoDB Atlas...');
    await mongoose.connect(connStr);
    
    console.log('====================================================');
    console.log('¡ÉXITO: Proyecto Aroma & Cacao conectado a MongoDB!');
    console.log('====================================================');
  } catch (error) {
    console.error('Error de conexión:', error.message);
  }
};

connectDB();
module.exports = connectDB;