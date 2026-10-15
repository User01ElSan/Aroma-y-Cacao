require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Lee directamente MONGO_URI de tu archivo .env
        const mongoURI = process.env.MONGO_URI;

        if (!mongoURI) {
            throw new Error("No se encontró la variable MONGO_URI en el archivo .env");
        }

        await mongoose.connect(mongoURI, {
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 15000,
            socketTimeoutMS: 45000,
            family: 4
        });

        console.log('¡ÉXITO: Conectado a MongoDB Atlas!');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;