import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Semilleros from "./pages/Semilleros";
import Proyectos from "./pages/Proyectos";
import Eventos from "./pages/Eventos";
import Estudiantes from "./pages/Estudiantes";

function App() {
    return (
        <>
            <Navbar />

            <main>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/semilleros" element={<Semilleros />} />
                    <Route path="/proyectos" element={<Proyectos />} />
                    <Route path="/eventos" element={<Eventos />} />
                    <Route path="/estudiantes" element={<Estudiantes />} />
                </Routes>
            </main>
        </>
    );
}

export default App;