# Usa una imagen oficial ligera de Node.js
FROM node:20-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install --production

# Copia todo el resto del código del proyecto al contenedor
COPY . .

# Expone el puerto por el que correrá la aplicación
EXPOSE 3000

# Comando para ejecutar el servidor cuando inicie el contenedor
CMD ["node", "src/app.js"]