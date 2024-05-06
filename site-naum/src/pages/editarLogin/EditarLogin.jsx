
import React from 'react';
import style from './EditarLogin.module.css';
import NavBar from './../../components/navbar/NavBarLogin';

const EditarLogin = () => {
    return (
        // Fragmento React para agrupar múltiplos elementos sem adicionar um nó extra ao DOM
        <>
            <NavBar />
            <div className={style["banner"]}>
                <div className={style["banner"]}>
                    <div className={style["validarconta"]}><br/>
                        <h1> LOGIN</h1>
                        <p>SENHA</p><input id={style["input_senha"]} placeholder="SENHA" type="password"/>
                        <p>NOVA SENHA</p><input id={style["input_senha"]} placeholder="NOVA SENHA" type="password"/>
                        <p>CONFIRMAR SENHA</p><input id={style["input_ConfSenha"]} placeholder="CONFIRMAR SENHA" type="password"/><br/>
                        <button onclick="entrar()">EDITAR</button>
                    </div>
                    <div id={style["pg_login"]}></div>
                </div>
            </div>
        
        </>
    );
};
// Exporta o componente Home para que possa ser usado em outras partes da aplicação
export default EditarLogin;