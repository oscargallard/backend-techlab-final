import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import productRoutes from './routes/products.routes.js';
import authRoutes from './routes/auth.routes.js';

// Configurar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// --- Middlewares ---
// Habilitar CORS para peticiones de otros dominios
app.use(cors());

// Interpretar body en formato JSON
app.use(bodyParser.json());

// --- Rutas ---
// Conectamos la ruta base /auth con nuestro archivo de rutas
app.use('/auth', authRoutes);
// Conectamos la ruta base /api/products con nuestro archivo de rutas
app.use('/api/products', productRoutes);

// --- Manejo de errores 404 (Ruta no encontrada) ---
app.use((req, res, next) => {
    res.status(404).json({
        error: 'Recurso no encontrado',
        message: 'La ruta solicitada no existe.'
    });
});

// --- Iniciar el servidor ---
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
