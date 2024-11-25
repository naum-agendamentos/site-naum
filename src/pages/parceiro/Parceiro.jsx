
import api from "../../api"; 
import styles from "./Parceiro.module.css"; 
import React, { useState, useEffect } from "react"; 
import NavBar from "../../components/navbar/NavBar"; 
import CardParceiros from "../../components/cardParceiros/CardParceiros"; 
//import StarVazia from "../../utils/assets/StarVazia.png";
//import StarCheia from "../../utils/assets/StarCheia.png";
//import Menu from "../../utils/assets/MenuRounded.png";
import Footer from "../../components/footer/Footer";

const Parceiro = () => {
    const [cardsData, setCardsData] = useState();

    function recuperarValorDoCard() {
        api.get('barbearias').then((response) => {
            const { data } = response;
            console.log(response)
            setCardsData(data)
        }).catch(() => {
            console.log("Deu erro, tente novamente!") 
        })
    }


  
    useEffect(() => {
        recuperarValorDoCard();
    }, []) 


    // function ativarStars() {
    //     var ativarEstrelas = document.getElementById('ativarE');
    //     if (ativarEstrelas.style.visibility === 'hidden') {
    //         ativarEstrelas.style.visibility = 'visible';
    //     } else {
    //         ativarEstrelas.style.visibility = 'hidden';
    //     }
    // }

    // function mudarEstrela(numero) {
    //     var estrelas = document.querySelectorAll('.stars img');
    //     for (var i = 0; i < estrelas.length; i++) {
    //         if (i < numero) {
    //             estrelas[i].src = StarCheia;
    //             estrelas[i].style.transform = 'scale(1.10)';
    //         } else {
    //             estrelas[i].src = StarVazia;
    //             estrelas[i].style.transform = 'scale(1)';
    //         }
    //     }
    // }


    return (
   
        <>

            <div class="borda-gradiente-left">
                <div class="borda-gradiente-right">
                    <NavBar />

                    <section className={styles["parceiros"]} id="parceiros">





                        <h1 className={styles["section-title"]}>NOSSOS CLIENTES</h1>
                        <br />
                        {/* <div className={styles["filtro"]}>
                            <a href="#atv" onClick={ativarStars}>
                                <h2>FILTRAR</h2>
                            </a>
                            <a href="#ativar" onClick={ativarStars}><img src={Menu} alt="" /></a>
                            <div className={styles["stars"]} id="ativarE" style={{ visibility: 'hidden' }} >
                                <a href="#1" onClick={() => mudarEstrela(1)}><img src={StarVazia} alt="" /></a>
                                <a href="#2" onClick={() => mudarEstrela(2)}><img src={StarVazia} alt="" /></a>
                                <a href="#3" onClick={() => mudarEstrela(3)}><img src={StarVazia} alt="" /></a>
                                <a href="#4" onClick={() => mudarEstrela(4)}><img src={StarVazia} alt="" /></a>
                                <a href="#5" onClick={() => mudarEstrela(5)}><img src={StarVazia} alt="" /></a>
                            </div>
                        </div> */}
                    </section>
                    <div className={styles["content-parceiros"]}>
                            {cardsData && cardsData.map((data, index) => (
                                <div key={index}>
                                    <CardParceiros
                                        foto={data.fotoBarbearia}
                                        linkBarbearia={data.linkBarbearia}
                                    />
                                </div>
                            ))}
                        </div>
                    <Footer />
                </div>
            </div>
        </>
    );
};
// Exporta o componente Musicas para uso em outras partes da aplicação
export default Parceiro;