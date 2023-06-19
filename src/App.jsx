import { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Inicio } from "./pages/Inicio";
import { Cursos } from "./pages/Cursos";
import { Error404 } from "./pages/Error404";
import { Navbar } from "./components/Navbar";
import { CourseInformation } from "./pages/CourseInformation";

export const CursosContext = createContext([]);

function App() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await fetch("/src/courses.json");
        const data = await response.json();
        setCursos(data);
      } catch (error) {
        console.error("Error fetching cursos:", error);
      }
    };
    fetchCursos();
  }, []);

  return (
    <CursosContext.Provider value={cursos}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/cursos/:urlCourse" element={<CourseInformation />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </CursosContext.Provider>
  );
}

export default App;
