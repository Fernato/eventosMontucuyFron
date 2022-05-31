import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from "../Components/auth/LoginScreen";
import { PanelScrren } from "../Components/auth/PanelScrren";
import { HomeScreen } from "../Components/EventoInicio/HomeScreen";
import { ConFotografiaScreen } from "../Components/Eventos/ConcursoFotografia/ConFotografiaScreen";
import { ReglamentoScreen } from "../Components/Eventos/ConcursoFotografia/ReglamentoScreen";
import { FromImagen } from "../Components/registro/FromImagen";
import { RegistroExitoso } from "../Components/registro/RegistroExitoso";
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
                <Route path="/reglamento-una-imagen-natural-para-covenas" element={<ReglamentoScreen />} />
                <Route path="/panel" element={<PanelScrren />} />
                <Route path="/cargar-imagen" element={<FromImagen />} />
                <Route path="/agradecimiento" element={<RegistroExitoso />} />
            </Routes>
           <Carga />
        </BrowserRouter>
    )
};
