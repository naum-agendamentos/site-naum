
import styles from "./NossosClientes.module.css"; 
import React, { useState, useEffect } from "react"; 
import NavBar from "../../components/navbar/NavBarLogin";
import CardParceiros from "../../components/cardParceiros/CardParceirosUD"; 
import axios from "axios";

const Parceiro = () => {
    const [cardsData, setCardsData] = useState();

    

    function recuperarValorDoCard() {
        const options = {
            method: 'GET',
            url: 'http://localhost:8080/barbearias',
            headers: {
              'User-Agent': 'insomnia/8.6.1',
              Authorization: `Bearer ${sessionStorage.getItem("token")}`
            }
          };
          
          axios.request(options).then(function (response) {
            console.log(response.data);
            const { data } = response;
            setCardsData(data)
          }).catch(function (error) {
            console.error(error);
          });
    }


    useEffect(() => {
        recuperarValorDoCard();
    }, []) 
  
    return (
       
        <>

            <div class="borda-gradiente-left">
                <div class="borda-gradiente-right">
                    <NavBar />

                    <section className={styles["parceiros"]} id="parceiros">

                        <h1 className={styles["section-title"]}>CLIENTES CADASTRADOS</h1>
                        <br />
                        <br />
                    </section>
                    <div className={styles["content-parceiros"]}>
                            {cardsData && cardsData.map((data, index) => (
                                <div key={index}>
                                    <CardParceiros
                                        id={data.id}
                                        fotoBarbearia={data.fotoBarbearia}
                                        nome={data.nome}
                                    />
                                </div>
                            ))}
                        </div>
                </div>
            </div>
        </>
    );
};

export default Parceiro;