import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

class AuthController {
    async login(req, res) {
        const { username, password } = req.body;

        // NOTA: En un caso real, aquí buscarías al usuario en Firebase.
        // Para este ejercicio, validamos contra un usuario fijo "admin".
        if (username === 'admin' && password === '123456') {

            // Creamos el payload (datos que viajan en el token)
            const payload = { username: 'admin', role: 'admin' };

            // Firmamos el token con la clave secreta y expira en 1 hora
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

            return res.status(200).json({
                message: 'Login exitoso',
                token: token
            });
        }

        // Si las credenciales están mal:
        return res.status(401).json({ error: 'Credenciales inválidas' });
    }
}

export default new AuthController();