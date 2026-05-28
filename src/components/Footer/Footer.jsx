import "./Footer.css";

export const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2026 S.T. Ariza. All rights reserved.</p>
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