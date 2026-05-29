import "./Footer.css";

export const Footer = () => {
    return (
        <footer className="footer">
            <p>Copyright &copy; Peluches de IKEA para TT. Todos los derechos reservados.</p>
            <nav>
                <ul className="nav-list">
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                </ul>
            </nav>
        </footer>
    );
}