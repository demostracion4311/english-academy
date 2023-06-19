import "../css/Navbar.css";
import { NavLink } from "react-router-dom";
export function Navbar() {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "nav__active" : null) }
      >
        Inicio
      </NavLink>
      <NavLink
        to="/cursos"
        className={({ isActive }) => (isActive ? "nav__active" : null)}
      >
        Cursos
      </NavLink>
    </>
  );
}