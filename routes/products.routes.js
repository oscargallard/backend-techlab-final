import { Router } from 'express';
import ProductController from '../controllers/product.controller.js';
// Importamos el middleware de seguridad
import { verifyToken } from '../middlewares/auth.middleware.js';

const router = Router();

// --- Rutas Públicas (Cualquiera puede ver los productos) ---
router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductById);

// --- Rutas Privadas (Solo usuarios con Token pueden entrar) ---
// Agregamos 'verifyToken' antes de llamar al controlador [cite: 58]

// POST /api/products/create
router.post('/create', verifyToken, ProductController.createProduct);

// DELETE /api/products/:id
router.delete('/:id', verifyToken, ProductController.deleteProduct);

export default router;