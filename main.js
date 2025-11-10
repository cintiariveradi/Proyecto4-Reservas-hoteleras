import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import reservasRouter from './src/routes/reservas.routes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './src/swagger/swagger.js';



// Configurar variables de entorno
dotenv.config();

// Crear la aplicación Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas principales
app.use('/api/reservas', reservasRouter);

// Puerto
const PORT = process.env.PORT || 3000;

// Documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});