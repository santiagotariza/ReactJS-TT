# 🧸 Tienda de Peluches - IKEA Fan Shop (Versión React)

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-%23039BE5.svg?style=for-the-badge&logo=Firebase&logoColor=AMBER)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-%2300C7B7.svg?style=for-the-badge&logo=netlify&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

Este proyecto es la evolución y refactorización completa a **ReactJS** del trabajo final para el curso de **Talento Tech**. Consiste en una simulación de e-commerce (SPA) temática de peluches de IKEA, migrando la lógica original de manipulación del DOM y almacenamiento estático hacia una arquitectura moderna basada en componentes, estado global y persistencia en la nube.

## 🚀 Demo
Puedes ver el proyecto desplegado aquí:
**https://tienda-de-peluches-ikea.netlify.app/**

## 📋 Características y Mejoras (vs. Versión Vanilla JS)

El sitio web ha sido optimizado con las siguientes funcionalidades y tecnologías:

* **Renderizado Dinámico desde la Nube:** Los productos ya no se cargan de un JSON local; ahora se consultan de forma asíncrona directamente desde una base de datos NoSQL en **Firebase Cloud Firestore**.
* **Enrutamiento Dinámico (SPA) y Layouts:** Implementación de **React Router Dom** con vistas estructuradas mediante `PublicLayout` y `AdminLayout`. Soporta rutas dinámicas para el catálogo (`/`), filtrado por categorías (`/category/:category`) y detalles (`/product/:id`).
* **Panel de Administración y Seguridad:**
    * Sistema de login seguro con **Firebase Authentication** y manejo de sesión a través de un `AuthContext`.
    * Protección de acceso mediante el componente `ProtectedRoute`.
    * **Dashboard de Inventario:** Visualización en tiempo real de los artículos, con capacidad para **eliminar** productos de la base de datos.
    * **Alta de Productos:** Formulario de carga de nuevos peluches con validación de datos (`validateProduct.js`) y subida dinámica de imágenes utilizando la **API de ImgBB**.
* **Carrito de Compras con Estado Global:**
    * Gestión centralizada mediante **Context API** (`CartProvider`) para evitar el *prop drilling*.
    * Control total desde la vista del carrito, permitiendo agregar, eliminar ítems individuales o vaciar el carrito completo.
* **Seguridad y Variables de Entorno:** Credenciales de Firebase y API Keys (ImgBB) completamente protegidas mediante archivos `.env` (ignorados por Git) y configuradas de manera segura en el entorno de producción de **Netlify**.

## 🛠️ Tecnologías Utilizadas

* **ReactJS (v18+):** Arquitectura basada en componentes funcionales y Hooks (`useState`, `useEffect`, `useContext`).
* **Vite:** Entorno de desarrollo y empaquetador de alto rendimiento.
* **Firebase (Firestore & Auth SDK):** Base de datos en la nube y sistema de autenticación de usuarios.
* **ImgBB API:** Servicio externo para el alojamiento y generación de URLs de imágenes de productos.
* **React Router Dom:** Manejo de rutas declarativas y protección de rutas en el cliente.
* **CSS3:** Estilos estructurados, Flexbox responsivo, variables y Media Queries, con un diseño unificado tanto para el lado del cliente como para el panel de administración.

## 📂 Estructura del Proyecto

```text
src/
├── assets/                # Logos e imágenes estáticas base
├── components/            # Componentes modulares de la interfaz
│   ├── Cart/              # Vista y lógica del carrito de compras
│   ├── Count/             # Contador de unidades (+ / -)
│   ├── Footer/            # Pie de página institucional
│   ├── Header/            # Encabezado principal del sitio
│   ├── Item/              # Tarjeta de producto individual
│   ├── ItemDetail/        # Presentación detallada del producto
│   ├── ItemDetailContainer/ # Lógica de petición para un producto específico
│   ├── ItemList/          # Grilla de renderizado para el catálogo
│   ├── ItemListContainer/ # Lógica del catálogo y filtros de categoría
│   ├── Login/             # Pantalla de autenticación para administradores
│   ├── Nav/               # Menú de navegación y burbuja del carrito
│   ├── ProtectedRoute/    # Componente envoltorio para protección de rutas privadas
│   └── adminComponents/   # Componentes exclusivos del panel de control
│       ├── Dashboard/     # Vista principal de gestión (listado y borrado)
│       └── ...            # Formularios de alta y gestion
├── context/               # Proveedores de estado global (CartContext, AuthContext)
├── firebase/              # Inicialización de servicios en la nube (config.js)
├── layouts/               # Estructuras maestras de vista (AdminLayout, PublicLayout)
├── services/              # Consultas a Firestore y subida de imágenes a ImgBB
├── utils/                 # Funciones auxiliares (validateProduct.js)
├── App.css                # Estilos del contenedor estructural
├── App.jsx                # Componente troncal y definición de enrutamiento
├── index.css              # Estilos globales y variables de diseño
└── main.jsx               # Punto de entrada de la aplicación
```

## 💻 Instalación y Configuración Local

Para clonar y ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/santiagotariza/ReactJS-TT.git
   cd ReactJS-TT
   ```

2. **Instalar las dependencias de Node:**
   ```bash
   npm install
   ```

3. **Configurar las Variables de Entorno:**
   Crea un archivo llamado `.env` en la raíz del proyecto y añade tus llaves de Firebase y de ImgBB utilizando el prefijo requerido por Vite:
   ```env
   VITE_FIREBASE_API_KEY="TU_API_KEY"
   VITE_FIREBASE_AUTH_DOMAIN="TU_AUTH_DOMAIN"
   VITE_FIREBASE_PROJECT_ID="TU_PROJECT_ID"
   VITE_FIREBASE_STORAGE_BUCKET="TU_STORAGE_BUCKET"
   VITE_FIREBASE_MESSAGING_SENDER_ID="TU_MESSAGING_SENDER_ID"
   VITE_FIREBASE_APP_ID="TU_APP_ID"
   
   VITE_IMGBB_API_KEY="TU_CLAVE_DE_IMGBB"
   ```

4. **Iniciar el servidor local de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador.