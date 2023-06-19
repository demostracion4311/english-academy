import "../css/Cursos.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CursosContext } from "../App";

export function Cursos() {
  const cursos = useContext(CursosContext);

  return (
    <>
      <h1>Cursos</h1>
      <div className="cursos-list">
        {cursos.map((curso) => (
          <div key={curso.id} className="curso-item">
            <img src={curso.banner} alt={curso.title} className="curso-image" />
            <h2>{curso.title}</h2>
            <p>{curso.description}</p>
            <Link to={`/cursos/${curso.urlCourse}`}>Ver más</Link>
          </div>
        ))}
      </div>
    </>
  );
}
