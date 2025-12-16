import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const verifyToken = (req, res, next) => {
    // 1. Leer el header 'Authorization'
    const header = req.header('Authorization') || "";

    // 2. Extraer el token (usualmente viene como "Bearer <token>")
    const token = header.split(" ")[1];

    if (!token) {
        return res.status(401).json({ error: 'Token no provisto' });
    }

    try {
        // 3. Verificar la firma del token
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.username = payload.username; // Guardamos el usuario en la request
        next(); // ¡Pase usted! Continúa a la siguiente función (el controlador)
    } catch (error) {
        return res.status(403).json({ error: 'Token inválido o expirado' });
    }
};