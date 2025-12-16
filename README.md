# 🚀 Proyecto Final - API REST E-commerce (TechLab)

Este proyecto es el trabajo final para el curso de Backend con Node.js. Consiste en una **API RESTful** diseñada para administrar el catálogo de productos de una tienda tecnológica ("TechLab").

La aplicación cuenta con una arquitectura en capas, conexión a base de datos en la nube (Firebase) y seguridad mediante Tokens (JWT).

## 📋 Características

* **CRUD de Productos:** Crear, Leer, y Eliminar productos.
* **Autenticación:** Login de usuarios mediante JWT (JSON Web Tokens).
* **Seguridad:** Protección de rutas sensibles (Crear y Borrar) solo para usuarios autenticados.
* **Base de Datos:** Persistencia de datos en **Google Cloud Firestore**.
* **Manejo de Errores:** Respuestas HTTP claras (404, 401, 500).

## 🛠️ Tecnologías Utilizadas

* **Node.js** (Entorno de ejecución)
* **Express** (Framework web)
* **Firebase / Firestore** (Base de datos NoSQL)
* **JsonWebToken** (Seguridad)
* **Dotenv** (Manejo de variables de entorno)
* **Cors** (Permisos de acceso cruzado)

## ⚙️ Instalación y Configuración

Sigue estos pasos para correr el proyecto localmente:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/TU_USUARIO/backend-techlab-final.git](https://github.com/TU_USUARIO/backend-techlab-final.git)
    cd backend-techlab-final
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno:**
    Crea un archivo `.env` en la raíz del proyecto y completa las siguientes claves (puedes guiarte con `.env.example`):
    ```env
    PORT=3000
    FIREBASE_API_KEY=tu_api_key_de_firebase
    FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
    FIREBASE_PROJECT_ID=tu_project_id
    JWT_SECRET=tu_palabra_secreta
    ```

4.  **Iniciar el Servidor:**
    ```bash
    npm start
    ```
    El servidor correrá en `http://localhost:3000`.

## 📡 Documentación de la API

Puedes probar estos endpoints usando **Postman** o **Thunder Client**.

### 🔐 Autenticación

| Método | Endpoint      | Descripción                         | Body (JSON) |
| :--- | :--- | :--- | :--- |
| `POST` | `/auth/login` | Inicia sesión y devuelve un Token.  | `{"username": "admin", "password": "123456"}` |

> **Nota:** Para este MVP, el usuario administrador está hardcodeado con las credenciales `admin` / `123456`.

### 📦 Productos

| Método | Endpoint | Requiere Token | Descripción |
| :--- | :--- | :---: | :--- |
| `GET` | `/api/products` | ❌ No | Obtiene todos los productos. |
| `GET` | `/api/products/:id` | ❌ No | Obtiene un producto por su ID. |
| `POST` | `/api/products/create`| ✅ Sí | Crea un nuevo producto. |
| `DELETE`| `/api/products/:id` | ✅ Sí | Elimina un producto. |

#### Ejemplo de Header para rutas protegidas:
Para usar `POST` o `DELETE`, debes incluir el token en la pestaña **Authorization** (Bearer Token) de Postman.

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura escalable:

```
backend-techlab-final/
├── controllers/
│   ├── auth.controller.js
│   └── product.controller.js
├── models/
│   └── product.model.js
├── routes/
│   ├── auth.routes.js
│   └── products.routes.js
├── services/
│   └── product.service.js
├── middlewares/
│   └── auth.middleware.js
├── config/
│   └── firebase.js
├── index.js
├── .env
├── .env.example
├── README.md
└── package.json
```

## ✒️ Autor

* **Oscar Luis Gallard** - *Alumno Desarrollador Backend*