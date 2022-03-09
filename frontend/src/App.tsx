import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Navbar from "components/Navbar";
import Lista from "./pages/lista";
import Formulario from "./pages/formulario";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Lista />} />
                <Route path="/form">
                    <Route path=":movieId" element={<Formulario />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
