const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            // Mantener vivos los sockets e impedir que Atlas o el SO los cierren por inactividad
            maxPoolSize: 10,                 // Mantiene un pool de hasta 10 conexiones activas
            serverSelectionTimeoutMS: 5000, // Tiempo de espera si el servidor no responde
            socketTimeoutMS: 45000,         // Cierra sockets inactivos después de 45s de forma limpia
            family: 4                       // Fuerza IPv4 para evitar demoras por resoluciones IPv6
        });

        console.log('¡ÉXITO: Conectado a MongoDB Atlas!');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error.message);
        process.exit(1);
    }
};

// Escuchar eventos de desconexión para reconectar automáticamente
mongoose.connection.on('disconnected', () => {
    console.log('Conexión perdida con MongoDB Atlas. Intentando reconectar...');
});

mongoose.connection.on('reconnected', () => {
    console.log('¡Reconectado con éxito a MongoDB Atlas!');
});

module.exports = connectDB;