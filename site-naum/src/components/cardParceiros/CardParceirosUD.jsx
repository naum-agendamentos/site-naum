// Importa React da biblioteca react
import React from "react";
// Importa os estilos específicos deste componente
import styles from "./CardParceirosUD.module.css";
// Importa uma imagem padrão para ser usada caso nenhuma imagem específica seja fornecida
import capaImg from "../../utils/assets/imagemParceiro.png";

import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate para redirecionamento de rotas

// Define o componente CardMusica como uma função que recebe propriedades
const CardParceiros = ({
    foto,
    nome,
}) => {
    const navigate = useNavigate(); // Inicializa o hook de navegação

    const editar = () => { // Função chamada ao clicar em cancelar
        navigate("/editar-barbearia"); // Redireciona para a página de músicas
    };


    return (
        // Contêiner principal do cartão
        <div>
            {/* Contêiner para a imagem */}
            <div className={styles["imagem-container"]}>
                {/* Exibe a imagem da música; usa imagemSrc se fornecido, caso contrário usa capaImg */}
                <img src={foto ? foto : capaImg} alt="Imagem"
                    className={styles["imagem"]} />
                {/* Contêiner para os botões */}
                <div className={styles["texto"]}>
                    <p>{nome || "N/A"}</p>
                </div>

                <div className={styles["botoes"]}>
                    {/* Botão para editar as informações da música */}
                    <button onClick={editar} className={styles["botao"]}>Editar</button>
                    {/* Botão para excluir a música */}
                    <button className={styles["botao"]}>Excluir</button>
                </div>
            </div>
        </div>

    );
};
// Exporta o componente para que possa ser usado em outras partes da aplicação
export default CardParceiros;