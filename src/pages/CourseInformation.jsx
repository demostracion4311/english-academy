import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CursosContext } from "../App";

export function CourseInformation() {
  const { urlCourse } = useParams();
  const cursos = useContext(CursosContext);
  const curso = cursos.find((curso) => curso.urlCourse === urlCourse);

  return (
    <>
      {curso ? (
        <>
          <h1>Curso Información {curso.title}</h1>
          <div className="curso-item">
            <h2>{curso.id}</h2>
            <img
              src={"/" + curso.banner}
              alt={curso.title}
              className="curso-image"
            />
            <h2 className="curso-title">{curso.title}</h2>
            <p className="curso-description">{curso.description}</p>
          </div>
        </>
      ) : (
        <p>No se encontró el curso.</p>
      )}
      <div className="progress-bar s-cross-center s-mb-2">
        <div className="bar" style={{ "--percentage": "0%" }}></div>
        <span className="s-color-text-light">0% completado</span>
      </div>
    </>
  );
}
