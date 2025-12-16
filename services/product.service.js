import ProductModel from '../models/product.model.js';

class ProductService {
    async getProducts() {
        return await ProductModel.getAll();
    }

    async getProductById(id) {
        return await ProductModel.getById(id);
    }

    async createProduct(productData) {
        // Aquí podrías validar datos antes de guardar si quisieras
        return await ProductModel.create(productData);
    }

    async deleteProduct(id) {
        return await ProductModel.delete(id);
    }
}

export default new ProductService();