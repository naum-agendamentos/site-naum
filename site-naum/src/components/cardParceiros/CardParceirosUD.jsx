// Importa React da biblioteca react
import React from "react";
// Importa os estilos específicos deste componente
import styles from "./CardParceirosUD.module.css";
// Importa uma imagem padrão para ser usada caso nenhuma imagem específica seja fornecida
import capaImg from "../../utils/assets/imagemParceiro.png";
//import api from "../../api";
import { toast } from "react-toastify";
import Swal from 'sweetalert2';
import axios from "axios";


import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate para redirecionamento de rotas

// Define o componente CardMusica como uma função que recebe propriedades
const CardParceiros = ({
    id,
    fotoBarbearia,
    nome,
}) => {
    const navigate = useNavigate(); // Inicializa o hook de navegação


    const editar = (id) => {
        navigate(`/editar-barbearia/${id}`);
    };



    const handleDelete = (id) => {
        Swal.fire({
            title: "Deseja deletar a barbearia?",
            text: "A barbearia será removida permanentemente",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "SIM",
            cancelButtonText: "CANCELAR"
        }).then((result) => {
            if (result.isConfirmed) {
                const options = {
                    method: 'PUT',
                    url: `http://localhost:8080/barbearias/desativar/${id}`,
                    headers: {
                      'User-Agent': 'insomnia/8.6.1',
                      Authorization: `Bearer ${sessionStorage.getItem("token")}`
                    }
                  };
                  
                  axios.request(options).then(function (response) {
                    console.log(response.data);
                    console.log('Barbearia deletada!', response.data);
                        toast.success("Barbearia deletada!");

                        setTimeout(() => {
                            window.location.reload();
                        }, 2400);
                  }).catch(function (error) {
                    console.error(error);
                    console.error('Erro ao deletar Barbearia', error);
                        toast.error("Erro ao deletar Barbearia");
                  });

            }
        });
    }


return (
    // Contêiner principal do cartão
    <div>
        {/* Contêiner para a imagem */}
        <div className={styles["imagem-container"]}>
            {/* Exibe a imagem da música; usa imagemSrc se fornecido, caso contrário usa capaImg */}
            <img src={fotoBarbearia ? fotoBarbearia : capaImg} alt="Imagem"
                className={styles["imagem"]} />
            {/* Contêiner para os botões */}
            <div className={styles["texto"]}>
                <p>{nome || "N/A"}</p>
            </div>

            <div className={styles["botoes"]}>
                {/* Botão para editar as informações da música */}
                <button onClick={() => editar(id)} className={styles["botao"]}>EDITAR</button>
                {/* Botão para excluir a música */}
                <button onClick={() => handleDelete(id)} className={styles["botao"]}>EXCLUIR</button>
            </div>
        </div>
    </div>

);
};
// Exporta o componente para que possa ser usado em outras partes da aplicação
export default CardParceiros;