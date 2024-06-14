
import React, { useState } from "react";
import style from './Login.module.css';
import NavBar from './../../components/navbar/NavBar';
import { useNavigate } from "react-router-dom";
import api from "../../api";
import { toast } from "react-toastify";

const LoginPage = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
    }

    const [inputValidEmail, setInputValidEmail] = useState("input-form");

    const [inputValidSenha, setInputValidSenha] = useState("input-form");

    const login = () => {

        if (email === "" || senha === "") {
            toast.error("Preencha todos os campos");
            if (email === "") {
                setInputValidEmail("input-error");
            } else {
                setInputValidEmail("input-form");
            }
            if (senha === "") {
                setInputValidSenha("input-error");
            } else {
                setInputValidSenha("input-form");
            }
        } else {
            setInputValidEmail("input-form");
            setInputValidSenha("input-form");

            api.post("usuarios/login", {
                email,
                senha
            }).then((response) => {
                const { data } = response;
                const { userId, token, tipo } = data;



                if (tipo === "ADMIN") {
                    sessionStorage.setItem('token', token)
                    sessionStorage.setItem('userId', userId)
                    navigate("/clientes");
                }
                else {
                    toast.error("Acesso negado!");
                }


            }).catch(() => {
                toast.error("Email ou senha inválidos!");
            })
        }
    }

    return (
      
        <>
            <div class="borda-gradiente-left">
                <div class="borda-gradiente-right">
                    <NavBar />
                    <div className={style["banner"]}>
                        <div className={style["banner"]}>
                            <div className={style["validarconta"]}><br />
                                <h1> LOGIN</h1>
                                <p>EMAIL</p><input className={style[inputValidEmail]} placeholder="EMAIL" onChange={(e) => handleInputChange(e, setEmail)} />
                                <p>SENHA</p><input className={style[inputValidSenha]} placeholder="SENHA" type="password" onChange={(e) => handleInputChange(e, setSenha)} /><br />
                                <button type="button" onClick={login}>ENTRAR</button>
                            </div>
                            <div className={style["pg_login"]}></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default LoginPage;