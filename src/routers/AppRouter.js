import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from "../Components/auth/LoginScreen";
import { PanelScrren } from "../Components/auth/PanelScrren";
import { HomeScreen } from "../Components/EventoInicio/HomeScreen";
import { ConFotografiaScreen } from "../Components/Eventos/ConcursoFotografia/ConFotografiaScreen";
import { RegistroFotografiaScreen } from "../Components/registro/RegistroFotografiaScreen";

import { Navbar } from "../Components/UI/NavBar";
import { Carga } from "../helpers/Carga";



export const AppRouter = () => {

    
    return (
        <BrowserRouter >
            <Navbar />
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/concursofotografia" element={<ConFotografiaScreen />} />
                <Route path="/registroFotografia" element={<RegistroFotografiaScreen />} />
                <Route path="/panel" element={<PanelScrren />} />
            </Routes>
           <Carga />
        </BrowserRouter>
    )
};
