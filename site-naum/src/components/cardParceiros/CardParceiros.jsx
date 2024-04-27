// Importa React da biblioteca react
import React from "react";
// Importa os estilos específicos deste componente
import styles from "./CardParceiros.module.css";
// Importa uma imagem padrão para ser usada caso nenhuma imagem específica seja fornecida
import capaImg from "../../utils/assets/imagemParceiro.png";

// Define o componente CardMusica como uma função que recebe propriedades
const CardParceiros = ({
     foto,
}) => {
    return (
        // Contêiner principal do cartão
        <div>
            {/* Contêiner para a imagem */}
            <div className={styles["imagem-container"]}>
                {/* Exibe a imagem da música; usa imagemSrc se fornecido, caso contrário usa capaImg */}
                <img src={foto ? foto : capaImg} alt="Imagem"
                    className={styles["imagem"]} />
            </div>
        </div>
    );
};
// Exporta o componente para que possa ser usado em outras partes da aplicação
export default CardParceiros;