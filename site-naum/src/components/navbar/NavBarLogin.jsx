import React from 'react';
import styles from './NavbarLogin.module.css';
const NavbarLogin = () => {
    return (
        <nav className={styles["navbar"]}>
            <div>
                <a href="./index.html" className={styles["logoN"]}>NA.UM</a>
            </div>

            <ul className={styles["navbar-options"]}>
                <li><a href="#SobreNos">Lista de Barbearia</a></li>
                <li><a href="#Funcionaliaddes">Criar Barbearia</a></li>
                <li><a href="#parceiros">Editar Login</a></li>
            </ul>


        </nav>
    );

};
export default NavbarLogin;