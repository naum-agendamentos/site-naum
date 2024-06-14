import api from "../../api"; 
import style from './Home.module.css';
import NavBar from './../../components/navbar/NavBar';
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react"; 
import CardParceiros from "../../components/cardParceiros/CardParceiros"; 


import agenda from '../../utils/assets/agendaServicos.png';
import estrela from '../../utils/assets/estrelaServicos.png';
import graficos from '../../utils/assets/graficosServicos.png';
import sinos from '../../utils/assets/sinoServicos.png';
import tela from '../../utils/assets/telaServicos.png';
import barbeiro from '../../utils/assets/barbeiroServicos.png';


import contratar from '../../utils/assets/contratar.png';




const HomePage = () => {



    const navigate = useNavigate(); 

    const nossosParceiros = () => { 
        navigate("/parceiros"); 
    };

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

    return (
       
        <>


            <header id="Home">
                <NavBar />
                <div className={style["header-content"]}>
                    <h1 element-anime="center">NA.UM</h1>
                    <p element-anime="center">AGENDAMENTOS
                    </p>
                </div>
            </header>


            <div class="borda-gradiente-left">
                <div class="borda-gradiente-right">
                    <section className={style["SobreNos"]} id="SobreNos">

                        <h1 className={style["section-title"]} element-anime="appear">A SOLUÇÃO QUE FALTAVA PARA O <br />
                            SEU NEGÓCIO
                        </h1>
                        <div className={style["info-container"]}>
                            <div className={style["info-naum"]}>
                                <p element-anime="appear">OTIMIZE A GESTÃO DA SUA BARBEARIA COM NOSSO SERVIÇO DE AGENDAMENTO
                                    ONLINE
                                </p>
                            </div>
                            <div element-anime="appear"></div>
                        </div>
                        <hr />

                        <div className={style["container-cards"]}>
                            <h1 className={style["section-title-servicos"]} element-anime="appear" id="Funcionaliaddes">TUDO QUE O NOSSO
                                SISTEMA PODE
                                <br /> FAZER POR VOCÊ
                            </h1>

                            <div className={style["cards"]}>
                                <div className={style["servicos-info"]} >
                                    <div className={style["info-card"]}>
                                        <div>
                                            <img src={agenda} alt="agenda" />
                                        </div>
                                        <p>
                                            VISUALIZE TODOS OS<br /> CORTES AGENDADOS<br /> NO DIA
                                        </p>
                                    </div>
                                </div>
                                <div className={style["servicos-info"]}>
                                    <div>
                                        <img src={estrela} alt="estrela" />
                                    </div>
                                    <div className={style["info-card"]}>
                                        <p>
                                            SELECIONE OS BARBEIROS<br /> COM AS MELHORES<br /> AVALIAÇÕES
                                        </p>
                                    </div>
                                </div>
                                <div className={style["servicos-info"]} >
                                    <div>
                                        <img src={graficos} alt="grafico" />
                                    </div>
                                    <div className={style["info-card"]}>
                                        <p>
                                            TENHA O CONTROLE DOS SEUS CORTES COM GRÁFICOS INDICATIVOS
                                        </p>
                                    </div>
                                </div>
                            </div>


                            <div className={style["cards"]}>
                                <div className={style["servicos-info"]} >
                                    <div className={style["info-card"]}>
                                        <div>
                                            <img src={sinos} alt="sino" />
                                        </div>
                                        <p>
                                            ENVIE COMUNICADOS<br /> PARA TODOS OS SEUS<br /> CLIENTES
                                        </p>
                                    </div>
                                </div>
                                <div className={style["servicos-info"]}>
                                    <div>
                                        <img src={tela} alt="tela" />
                                    </div>
                                    <div className={style["info-card"]}>
                                        <p>
                                            TENHA UMA TELA<br /> ESPECÍFICA PARA<br /> VOCÊ
                                        </p>
                                    </div>
                                </div>
                                <div className={style["servicos-info"]} >
                                    <div>
                                        <img src={barbeiro} alt="barbeiro" />
                                    </div>
                                    <div className={style["info-card"]}>
                                        <p>
                                            ADICIONE NOVOS BARBEIROS<br /> QUE TRABALHAM JUNTO<br /> COM VOCÊ
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className={style["background"]}>

                        <section className={style["parceiros"]} id="parceiros">


                            <h1 className={style["section-title"]} element-anime="center">CONFIRA NOSSOS PARCEIROS DE
                                <br />SUCESSO
                            </h1>
                            <ul className={style["ver-mais"]}>
                                <li><a onClick={nossosParceiros} href="#parceiros" element-anime="center">VER TODOS</a></li>
                            </ul>

                            <div className={style["content-parceiros"]}>
                                {cardsData && cardsData.slice(0, 3).map((data, index) => (
                                    <div key={index}>
                                        <CardParceiros
                                            foto={data.fotoBarbearia}
                                        />
                                    </div>
                                ))}
                            
                    </div>
                </section>

                <section className={style["contratar"]}>

                    <div className={style["card-contratar"]} id="NosContatar">
                        <div className={style["contratar-info"]}>
                            <div>
                                <img src={contratar} alt="contratar" />
                            </div>
                        </div>
                    </div>
                    <h1 className={style["contratar-title"]} element-anime="center">DESEJA SER UM BARBEIRO DE
                        <br /><span>SUCESSO?</span>
                    </h1>

                    <div>
                        <a href="#contratar" element-anime="center">CONTRATAR AGORA</a>
                    </div>
                </section>
            </div>
        </div >
            </div >
    <Footer />

        </>
    );
};

export default HomePage;