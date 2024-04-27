
import React from 'react';
import style from './Login.module.css';
import NavBar from './../../components/navbar/NavBar';

const LoginPage = () => {
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
                                <p>EMAIL</p><input id={style["input_email"]} placeholder="EMAIL" />
                                <p>SENHA</p><input id={style["input_senha"]} placeholder="SENHA" type="password" /><br />
                                <button onclick="entrar()">ENTRAR</button>
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