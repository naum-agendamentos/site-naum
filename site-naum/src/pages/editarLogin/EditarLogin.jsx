import React, { useState } from "react";
import style from './EditarLogin.module.css';
import NavBar from './../../components/navbarLogin/NavBarLogin';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import api from "../../api";

const EditarLogin = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmSenha, setConfirmSenha] = useState("");

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
    }

    const [inputValidEmail, setInputValidEmail] = useState("input-form");

    const [inputValidSenha, setInputValidSenha] = useState("input-form");

    const [inputValidConfSenha, setInputValidConfSenha] = useState("input-form");


    const handleEmailBlur = (event) => {
        const value = event.target.value;

        const regexEmail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!value.match(regexEmail)) {
            toast.warn("Digite um email válido");
            setInputValidEmail("input-error");
        } else {
            setInputValidEmail("input-form");
        }
    }

    const handleSenhaBlur = (event) => {
        const value = event.target.value;

        if (value.length < 6) {
            toast.warn("A senha deve conter no mínimo 6 dígitos");
            setInputValidSenha("input-error");
        } else {
            setInputValidSenha("input-form");
        }
    }

    const handleConfSenhaBlur = (event) => {
        const value = event.target.value;

        if (value !== senha) {
            toast.warn("As senhas não coincidem");
            setInputValidConfSenha("input-error");
        } else {
            setInputValidConfSenha("input-form");
        }
    }

    const validateFields = () => {
        if (!email || !senha || !confirmSenha) {
            toast.warn("Preencha todos os campos corretamente.");
            return false;
        }
        if (senha !== confirmSenha) {
            toast.warn("As senhas não coincidem.");
            return false;
        }
        return true;
    };

    const editarLogin = () => {
        if (validateFields()) {
            const options = {
                method: 'PUT',
                url: `login-adm`,
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': 'insomnia/8.6.1',
                    'Accept-Language': 'pt-br',
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`
                },
                data: {
                    email: email,
                    senha: senha
                }
            };

            api.request(options).then(function (response) {
                console.log(response.data);
                toast.success("Login editado!"); 
                navigate("/login"); 
                sessionStorage.clear();
            }).catch(function (error) {
                console.error(error);
                toast.error("Ocorreu um erro ao editar!");
            });
        }
    }

    return (
       
        <>
            <NavBar />
            <div className={style["banner"]}>
                <div className={style["banner"]}>
                    <div className={style["validarconta"]}><br />
                        <h1> LOGIN</h1>
                        <p>EMAIL</p><input className={style[inputValidEmail]} onBlur={handleEmailBlur} placeholder="EMAIL" onChange={(e) => handleInputChange(e, setEmail)} />
                        <p>SENHA</p><input className={style[inputValidSenha]} onBlur={handleSenhaBlur} placeholder="SENHA" type="password" onChange={(e) => handleInputChange(e, setSenha)} />
                        <p>CONFIRMAR SENHA</p><input className={style[inputValidConfSenha]} onBlur={handleConfSenhaBlur} placeholder="CONFIRMAR SENHA" type="password" onChange={(e) => handleInputChange(e, setConfirmSenha)} />
                        <button onClick={editarLogin}>EDITAR</button>
                    </div>
                    <div id={style["pg_login"]}></div>
                </div>
            </div>

        </>
    );
};

export default EditarLogin;
