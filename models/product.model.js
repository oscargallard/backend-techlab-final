import db from '../config/firebase.js';
import { collection, getDocs, getDoc, addDoc, deleteDoc, doc } from "firebase/firestore";

// Referencia a la colección 'products' en la base de datos
const productsCollection = collection(db, "products");

class ProductModel {
    // 1. Obtener todos los productos
    async getAll() {
        const snapshot = await getDocs(productsCollection);
        // Mapeamos los documentos para devolver un array de objetos con su ID y datos
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }

    // 2. Obtener un producto por ID
    async getById(id) {
        const productRef = doc(db, "products", id);
        const snapshot = await getDoc(productRef);
        if (!snapshot.exists()) return null;
        return { id: snapshot.id, ...snapshot.data() };
    }

    // 3. Crear un nuevo producto
    async create(productData) {
        const docRef = await addDoc(productsCollection, productData);
        return { id: docRef.id, ...productData };
    }

    // 4. Eliminar un producto
    async delete(id) {
        const productRef = doc(db, "products", id);
        await deleteDoc(productRef);
        return { id };
    }
}

export default new ProductModel();