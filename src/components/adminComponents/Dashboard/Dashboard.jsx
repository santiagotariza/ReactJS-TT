import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import { useAuth } from "../../../context/AuthContext";
import { getProducts, deleteProduct } from "../../../services/productsService";

export const Dashboard = () => {
  const { logout } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Cargar los productos apenas se abre el Dashboard
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  // Función para manejar el botón de eliminar
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar este peluche?");
    if (confirmDelete) {
      try {
        await deleteProduct(id);
        // Actualizamos la vista quitando el producto borrado
        setProducts(products.filter((prod) => prod.id !== id));
      } catch (error) {
        alert("Hubo un error al eliminar el producto.");
      }
    }
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2>Panel de administración</h2>
        <div className="header-actions">
          <Link className="btn primary" to="/">Volver a la tienda</Link>
          <button className="btn bg-delete primary" onClick={logout}>Cerrar sesión</button>
        </div>
      </header>

      <section className="dashboard-actions">
        <h3>Acciones rápidas</h3>
        <div className="actions-grid">
          <Link to="/admin/products/new" className="action-card">➕ Cargar Nuevo</Link>
        </div>
      </section>

      <section className="dashboard-list">
        <h3>Inventario de Productos</h3>
        {loading ? (
          <p>Cargando inventario...</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Categoría</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img src={product.image} alt={product.name} width="50" style={{ borderRadius: "5px" }} />
                  </td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>
                    <button onClick={() => handleDelete(product.id)} className="btn bg-delete primary" style={{ padding: "0.4rem 0.8rem", fontSize: "0.9rem" }}>
                      🗑️ Borrar
                    </button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center" }}>No hay productos en la tienda.</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};