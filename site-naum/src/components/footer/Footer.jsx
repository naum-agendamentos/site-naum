import React from 'react';
import style from './Footer.module.css';
import login from '../../pages/login/Login.jsx'

//imagens footer
import logoNaum from '../../utils/assets/logos/NAUM.png';
import instagram from '../../utils/assets/InstagramLogo.png';
import gitHub from '../../utils/assets/GithubLogo.png';
import linkedin from '../../utils/assets/LinkedinLogo.png';
import seta from '../../utils/assets/arrow-climb-up.png';

const Footer = () => {
    return (
        <footer className={style["Footer"]}>
            <hr />
            <div className={style["container-content"]}>
                <img className={style["select-disable"]} src={logoNaum} alt="Logo NAUM." />
                <div className={style["footer-content"]}>
                    <ul>
                        <li>SESSÕES DO SITE</li>
                        <li><a href="#SobreNos">Sobre </a></li>
                        <li><a href="#Funcionaliaddes">Funcionalidades</a></li>
                        <li><a href="#parceiros">Parceiros</a></li>
                        <li><a href={login}>Login</a></li>
                    </ul>
                    <ul>
                        <li>CONTATO</li>
                        <li>naum@gmail.com</li>
                        <li>(+55) 11 9999-9999</li>

                        <div className={style["redes select-disable"]}>
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
                    <img className={style["select-disable"]} src={seta} alt="Seta para subir" />
                </a>
            </div>
        </footer>
    );

};
export default Footer;