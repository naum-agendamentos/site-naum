
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

    const login = () => {
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

    return (
        // Fragmento React para agrupar múltiplos elementos sem adicionar um nó extra ao DOM
        <>
            <div class="borda-gradiente-left">
                <div class="borda-gradiente-right">
                    <NavBar />
                    <div className={style["banner"]}>
                        <div className={style["banner"]}>
                            <div className={style["validarconta"]}><br />
                                <h1> LOGIN</h1>
                                <p>EMAIL</p><input id={style["input_email"]} placeholder="EMAIL" onChange={(e) => handleInputChange(e, setEmail)} />
                                <p>SENHA</p><input id={style["input_senha"]} placeholder="SENHA" type="password" onChange={(e) => handleInputChange(e, setSenha)} /><br />
                                <button type="button" onClick={login}>ENTRAR</button>
                            </div>
                            <div id={style["pg_login"]}></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
// Exporta o componente Home para que possa ser usado em outras partes da aplicação
export default LoginPage;