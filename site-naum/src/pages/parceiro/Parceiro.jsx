// Importa as dependências necessárias, incluindo React, estilos específicos, componentes e a imagem do logotipo.
import api from "../../api"; // Importa a instância da API para fazer chamadas HTTP
import styles from "./Parceiro.module.css"; // Importa o arquivo de estilos CSS para este componente
import React, { useState, useEffect } from "react"; // Importa React, useState e useEffect de 'react'
import NavBar from "../../components/navbar/NavBar"; // Importa o componente NavBar
import CardParceiros from "../../components/cardParceiros/CardParceiros"; // Importa o componente CardParceiros
import StarVazia from "../../utils/assets/StarVazia.png";
import Menu from "../../utils/assets/MenuRounded.png"

const Parceiro = () => {
    const [cardsData, setCardsData] = useState();

    function recuperarValorDoCard() {
        api.get().then((response) => {
            const { data } = response;
            console.log(response)
            setCardsData(data)
        }).catch(() => {
            console.log("Deu erro, tente novamente!") // Caso haja um erro na requisição, exibe uma mensagem no console
        })
    }

    /*
    EXEMPLO DE POST 
        const novaMusica = {
        nomeMusica: "Nova Música",
        artista: "Novo Artista",
        genero: "Novo Gênero",
        ano: "2024-01-01T00:00:00.000Z",
        imagem: "https://exemplo.com/nova-imagem.jpg"
    };

    api.post('/caminhoParaMusica', novaMusica)
        .then((response) => {
            console.log('Música adicionada com sucesso', response.data);
            // Atualizar a UI aqui, se necessário
        })
        .catch((erro) => {
            console.error('Erro ao adicionar música', erro);
        });

    EXEMPLO DE PUT
    function atualizarMusica() {
    const musicaAtualizada = {
        nomeMusica: "Música Atualizada",
        artista: "Artista Atualizado",
        genero: "Gênero Atualizado",
        ano: "2024-01-02T00:00:00.000Z",
        imagem: "https://exemplo.com/imagem-atualizada.jpg"
    };

    const musicaId = "1"; // ID da música a ser atualizada

    api.put(`/caminhoParaMusica/${musicaId}`, musicaAtualizada)
        .then((response) => {
            console.log('Música atualizada com sucesso', response.data);
            // Atualizar a UI aqui, se necessário
        })
        .catch((erro) => {
            console.error('Erro ao atualizar música', erro);
        });
    }

    EXEMPLO DE DELETE
    function deletarMusica() {
    const musicaId = "1"; // ID da música a ser deletada

    api.delete(`/caminhoParaMusica/${musicaId}`)
        .then((response) => {
            console.log('Música deletada com sucesso', response.data);
            // Atualizar a UI aqui, se necessário
        })
        .catch((erro) => {
            console.error('Erro ao deletar música', erro);
        });
    }

    */

    // useEffect para chamar a função recuperarValorDoCard() quando o componente é montado
    useEffect(() => {
        recuperarValorDoCard();
    }, []) // O array vazio como segundo argumento significa que o efeito será executado apenas uma vez, após a montagem inicial do componente

    // Renderiza o componente
    return (
        // Fragmento React para agrupar os elementos retornados
        <>

            <div class="borda-gradiente-left">
                <div class="borda-gradiente-right">
                <NavBar />

                    <section className={styles["parceiros"]} id="parceiros">
                        


                        {/* Renderiza o componente NavBar, passando o logo como propriedade */}
                       
                        {/* Contêiner para os cartões de música */}
                        
                            
                        <h1 className={styles["section-title"]}>NOSSOS CLIENTES</h1>
                        <br />
                        <br />
                        <div className={styles["filtro"]}>
                            <a href="#ativarE" onclick="ativarStars()">
                                <h2>FILTRAR</h2>
                            </a>
                            <a href="#ativar" onclick="ativarStars()"><img src={Menu} alt="" /></a>
                            <div className={styles["stars"]} id="ativarE" >
                                <a href="#1" onclick="mudarEstrela(1)"><img src={StarVazia} alt="" /></a>
                                <a href="#2" onclick="mudarEstrela(2)"><img src={StarVazia} alt="" /></a>
                                <a href="#3" onclick="mudarEstrela(3)"><img src={StarVazia} alt="" /></a>
                                <a href="#4" onclick="mudarEstrela(4)"><img src={StarVazia} alt="" /></a>
                                <a href="#5" onclick="mudarEstrela(5)"><img src={StarVazia} alt="" /></a>
                            </div>
                        </div>

                        <div className={styles["content-parceiros"]}>
                            {cardsData && cardsData.map((data, index) => (
                                <div key={index}>
                                    <CardParceiros
                                        imagemSrc={data.imagem}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};
// Exporta o componente Musicas para uso em outras partes da aplicação
export default Parceiro;