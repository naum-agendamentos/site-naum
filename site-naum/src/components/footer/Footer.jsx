import React from 'react';
import styles from './Footer.module.css';
import { useNavigate } from "react-router-dom";

//imagens footer
import logoNaum from '../../utils/assets/logos/NAUM.png';
import instagram from '../../utils/assets/InstagramLogo.png';
import gitHub from '../../utils/assets/GithubLogo.png';
import linkedin from '../../utils/assets/LinkedinLogo.png';
import seta from '../../utils/assets/arrow-climb-up.png';

const Footer = () => {
    const navigate = useNavigate();
    const login = () => { // Função chamada ao clicar em cancelar
        navigate("/login"); // Redireciona para a página de músicas
    };

    return (
        <footer className={styles["Footer"]}>
            <hr />
            <div className={styles["container-content"]}>
                <img className={styles["select-disable"]} src={logoNaum} alt="Logo NAUM." />
                <div className={styles["footer-content"]}>
                    <ul>
                        <li>SESSÕES DO SITE</li>
                        <li><a href="#SobreNos">Sobre </a></li>
                        <li><a href="#Funcionaliaddes">Funcionalidades</a></li>
                        <li><a href="#parceiros">Parceiros</a></li>
                        <li><a onClick={login} href="#login">Login</a></li>
                    </ul>
                    <ul>
                        <li>CONTATO</li>
                        <li>naum@gmail.com</li>
                        <li>(+55) 11 9999-9999</li>

                        <div className={styles["redes select-disable"]}>
                            <a href="#insta">
                                <img src={instagram} alt="logo-instagram" />
                            </a>
                            <a href="https://github.com/naum-agendamentos">
                                <img src={gitHub} alt="logo-github" />
                            </a>
                            <a href="#linke">
                                <img src={linkedin} alt="logo-linkedin" />
                            </a>
                        </div>
                    </ul>

                </div>



                <a href="#Home">
                    <img className={styles["select-disable"]} src={seta} alt="Seta para subir" />
                </a>
            </div>
        </footer>
    );

};
export default Footer;