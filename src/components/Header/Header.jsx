import { Link } from "react-router-dom";
import logo from "../../../public/img/ikea.svg";
import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to={"/"} className="logo">
          <span>Tienda de Peluches</span>
          <img src={logo} />
        </Link>
      </div>
      <Nav />
    </header>
  );
};