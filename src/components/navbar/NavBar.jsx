import React from 'react';
import styles from './NavBar.module.css';
import { useNavigate } from "react-router-dom";
const NavBar = () => {

    const navigate = useNavigate();

    const home = () => {
        sessionStorage.clear();
        navigate("/");
    };

    return (
        <nav className={styles["nav"]}>
            <div>
                <a onClick={home} href='#home' className={styles["logoN"]}>NA.UM</a>
            </div>

            <ul className={styles["navbar-options"]}>
                <li><a onClick={home} href="#SobreNos">Sobre</a></li>
                <li><a onClick={home} href="#Funcionaliaddes">Funcionalidades</a></li>
                <li><a onClick={home} href="#parceiros">Parceiros</a></li>
                <li><a onClick={home} href="#NosContatar">Contato</a></li>
            </ul>


        </nav>
    );

};
export default NavBar;