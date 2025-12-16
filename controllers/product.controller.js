import ProductService from '../services/product.service.js';

class ProductController {
    // Obtener todos los productos
    async getAllProducts(req, res) {
        try {
            const products = await ProductService.getProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ error: 'Error al obtener productos', details: error.message });
        }
    }

    // Obtener un producto por ID
    async getProductById(req, res) {
        try {
            const { id } = req.params;
            const product = await ProductService.getProductById(id);

            if (!product) {
                return res.status(404).json({ error: 'Producto no encontrado' });
            }

            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ error: 'Error al buscar el producto', details: error.message });
        }
    }

    // Crear producto
    async createProduct(req, res) {
        try {
            const productData = req.body;
            // Validación básica
            if (!productData.name || !productData.price) {
                return res.status(400).json({ error: 'Faltan datos obligatorios (nombre, precio)' });
            }

            const newProduct = await ProductService.createProduct(productData);
            res.status(201).json({ message: 'Producto creado', product: newProduct });
        } catch (error) {
            res.status(500).json({ error: 'Error al crear producto', details: error.message });
        }
    }

    // Eliminar producto
    async deleteProduct(req, res) {
        try {
            const { id } = req.params;
            await ProductService.deleteProduct(id);
            res.status(200).json({ message: 'Producto eliminado correctamente' });
        } catch (error) {
            res.status(500).json({ error: 'Error al eliminar producto', details: error.message });
        }
    }
}

export default new ProductController();