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

* **Renderizado Dinámico desde la Nube:** Los productos ya no se cargan de un JSON local mediante `fetch`; ahora se consultan de forma asíncrona directamente desde una base de datos NoSQL en **Firebase Cloud Firestore**.
* **Enrutamiento Dinámico (SPA):** Implementación de **React Router Dom** para una navegación fluida sin recargar el navegador, soportando rutas dinámicas para el catálogo completo (`/`), filtrado por categorías (`/category/:category`) y vista de detalles de productos (`/product/:id`).
* **Carrito de Compras con Estado Global:**
    * Gestión centralizada mediante **Context API** (`CartProvider` y hook personalizado `useCart`) para evitar el *prop drilling*.
    * Agregar productos con contador incremental adaptable (`Count.jsx`).
    * Visualización y control total desde la vista del carrito (`CartView.jsx`), permitiendo eliminar ítems individuales o vaciar el carrito completo.
* **Interfaz y Estilos Unificados:** Estructura CSS modularizada por componente (`Header.css`, `Nav.css`, `Item.css`, `Cart.css`), con un diseño de interfaz pulido (diseño de tarjetas con alturas homogéneas alineadas y botón de carrito flotante con sombreado dinámico).
* **Seguridad y Variables de Entorno:** Credenciales de Firebase completamente protegidas mediante archivos `.env` (ignorados por Git) y configuradas de manera segura en el entorno de producción de **Netlify**.

## 🛠️ Tecnologías Utilizadas

* **ReactJS (v18+):** Arquitectura basada en componentes funcionales y Hooks Hooks (`useState`, `useEffect`, `useContext`).
* **Vite:** Entorno de desarrollo y empaquetador de alto rendimiento.
* **Firebase (Firestore SDK):** Base de datos en la nube para el catálogo de peluches.
* **React Router Dom:** Manejo de rutas declarativas en el cliente.
* **CSS3:** Estilos estructurados, Flexbox responsivo, variables y Media Queries.

## 📂 Estructura del Proyecto

```text
src/
├── assets/                # Logos vectoriales e imágenes estáticas base
├── components/            # Componentes modulares de la interfaz
│   ├── Cart/              # Vista del carrito, listas e ítems individuales (CartView, CartItem)
│   ├── Count/             # Contador de unidades (+ / -) con control de stock
│   ├── Footer/            # Pie de página institucional de la tienda
│   ├── Header/            # Encabezado principal del sitio
│   ├── Item/              # Tarjeta de producto individual reutilizable
│   ├── ItemDetail/        # Presentación detallada del peluche seleccionado
│   ├── ItemDetailContainer/ # Contenedor lógico que solicita el producto a Firebase
│   ├── ItemList/          # Grilla de renderizado para las tarjetas
│   ├── ItemListContainer/ # Contenedor lógico del catálogo con filtro por categoría
│   └── Nav/               # Menú de navegación y botón del carrito interactivo
├── context/               # Proveedor del estado global del carrito (CartContext.jsx)
├── firebase/              # Configuración e inicialización segura de Firebase (config.js)
├── services/              # Consultas y peticiones a la API de Firestore (productsService.js)
├── App.css                # Estilos del contenedor estructural principal (<main>)
├── App.jsx                # Componente troncal y definición de rutas de la SPA
├── index.css              # Estilos globales, resets universales y variables de diseño
└── main.jsx               # Punto de entrada de la aplicación en el árbol del DOM