
import React from "react";

import styles from "./CardParceiros.module.css";

import capaImg from "../../utils/assets/imagemParceiro.png";


const CardParceiros = ({
     foto,
}) => {
    return (
   
        <div>
        
            <div className={styles["imagem-container"]}>
              
                <img src={foto ? foto : capaImg} alt="Imagem"
                    className={styles["imagem"]} />
            </div>
        </div>
    );
};

export default CardParceiros;