import React from 'react';
import styles from './NavbarLogin.module.css';
import { useNavigate } from "react-router-dom"; 
const NavbarLogin = () => {

    const navigate = useNavigate(); 

    const listaBarb = () => { 
        navigate("/clientes"); 
    };

    const home = () => { 
        navigate("/"); 
        sessionStorage.clear()
    };

    const cadastrarBarb = () => { 
        navigate("/cadastrar"); 
    };

    const editarLogin = () => { 
        navigate("/editar-login"); 
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