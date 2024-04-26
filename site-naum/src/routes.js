import React from "react";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Parceiro from "./pages/parceiro/Parceiro";
import EditarLogin from"./pages/editarLogin/EditarLogin";
import NotFound from "./pages/notFound/NotFound";
import CadastrarBarbearia from "./pages/cadastrarBarbearia/CadastrarBarbearia";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/parceiros" element={<Parceiro />} />
                    <Route path="/editar-login" element={<EditarLogin />} />
                    <Route path="/*" element={<NotFound />} />
                    <Route path="/cadastrar" element={<CadastrarBarbearia />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rotas;