
import React from "react";

import styles from "./CardParceirosUD.module.css";

import capaImg from "../../utils/assets/imagemParceiro.png";

import { toast } from "react-toastify";
import Swal from 'sweetalert2';
import axios from "axios";


import { useNavigate } from "react-router-dom";


const CardParceiros = ({
    id,
    fotoBarbearia,
    nome,
}) => {
    const navigate = useNavigate(); 


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
                    url: `https://api-rest-naum.azurewebsites.net/barbearias/desativar/${id}`,
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
    
    <div>
       
        <div className={styles["imagem-container"]}>
          
            <img src={fotoBarbearia ? fotoBarbearia : capaImg} alt="Imagem"
                className={styles["imagem"]} />
          
            <div className={styles["texto"]}>
                <p>{nome || "N/A"}</p>
            </div>

            <div className={styles["botoes"]}>
              
                <button onClick={() => editar(id)} className={styles["botao"]}>EDITAR</button>
              
                <button onClick={() => handleDelete(id)} className={styles["botao"]}>EXCLUIR</button>
            </div>
        </div>
    </div>

);
};

export default CardParceiros;