import React from 'react';
import styles from './NavBar.module.css';
const NavBar = () => {
    return (
        <nav className={styles["navbar"]}>
            <div>
              <a href="./index.html" className={styles["logoN"]}>NA.UM</a>
            </div>

            <ul className={styles["navbar-options"]}>
                    <li><a href="#SobreNos">Sobre</a></li>
                    <li><a href="#Funcionaliaddes">Funcionalidades</a></li>
                    <li><a href="#parceiros">Parceiros</a></li>
                    <li><a href="#NosContatar">Contato</a></li>
                </ul>


        </nav>
    );
    
};
export default NavBar;