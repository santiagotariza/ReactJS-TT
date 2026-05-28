import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // 1. Creamos el estado para el error

    useEffect(() => {
        setLoading(true); // Reiniciamos el loading al cambiar de categoría
        
        fetch("/data/products.json")
        .then((res) => {
            if (!res.ok) throw new Error("Error en la petición"); // Validamos que el fetch sea exitoso
            return res.json();
        })
        .then((data) => {
            // 2. Lógica para filtrar si existe una categoría
            if (category) {
                const filteredProducts = data.filter(prod => prod.category === category);
                setProducts(filteredProducts);
            } else {
                setProducts(data);
            }
        })
        .catch((err) => {
            console.error(err);
            setError("Hubo un error al cargar los productos."); // 3. Guardamos el mensaje de error
        })
        .finally(() => {
            setLoading(false); // finally se ejecuta siempre, haya éxito o error
        });
    }, [category]); // 4. Agregamos category para que se vuelva a ejecutar si cambia la URL

    // 5. Manejo de la UI según los estados
    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>; // Ahora esto funcionará sin romper la app

    return (
        <section>
            <ItemList products={products} />
        </section>
    );
};