import React from 'react';
import styles from './NavbarLogin.module.css';
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate para redirecionamento de rotas
const NavbarLogin = () => {

    const navigate = useNavigate(); // Inicializa o hook de navegação

    const listaBarb = () => { // Função chamada ao clicar em cancelar
        navigate("/clientes"); // Redireciona para a página de músicas
    };

    const home = () => { // Função chamada ao clicar em cancelar
        navigate("/"); // Redireciona para a página de músicas
    };

    const cadastrarBarb = () => { // Função chamada ao clicar em cancelar
        navigate("/cadastrar"); // Redireciona para a página de músicas
    };

    const editarLogin = () => { // Função chamada ao clicar em cancelar
        navigate("/editar-login"); // Redireciona para a página de músicas
    };

    return (
        <nav className={styles["navbar"]}>
            <div>
                <a onClick={home} href="#Inicio" className={styles["logoN"]}>NA.UM</a>
            </div>

            <ul className={styles["navbar-options"]}>
                <li><a onClick={listaBarb} href="#List-barb">Lista de Barbearia</a></li>
                <li><a onClick={cadastrarBarb} href="#Cadastrar">Criar Barbearia</a></li>
                <li><a onClick={editarLogin} href="#EditarLogin">Editar Login</a></li>
            </ul>


        </nav>
    );

};
export default NavbarLogin;