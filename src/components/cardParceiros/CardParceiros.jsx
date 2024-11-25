
import React from "react";

import styles from "./CardParceiros.module.css";

import capaImg from "../../utils/assets/imagemParceiro.png";


const CardParceiros = ({
     foto,
     linkBarbearia
}) => {
    return (
        <a href={linkBarbearia} target="_blank" rel="noopener noreferrer" className={styles["link"]}>
        <div>
        
            <div className={styles["imagem-container"]}>
              
                <img src={foto ? foto : capaImg} alt="Imagem"
                    className={styles["imagem"]} />
            </div>
        </div>
        </a>
    );
};

export default CardParceiros;