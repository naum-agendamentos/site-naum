//import api from "../../api"; // Importa a API para comunicação com o backend
import { toast } from "react-toastify"; // Importa toast para exibir mensagens de sucesso ou erro
import React, { useEffect, useState } from "react"; // Importa React e o hook useState para gerenciamento de estado
import styles from "./EditarBarbearia.module.css"; // Importa os estilos CSS para este componente
import { useNavigate, useParams } from "react-router-dom"; // Importa o hook useNavigate para redirecionamento de rotas
import NavBarLogin from "../../components/navbar/NavBarLogin"; // Importa o componente NavBar para a barra de navegação
import { inputSomenteTexto } from "../../utils/globals"; // Import da função global
//import imgNaum from "../../utils/assets/logos/NAUM.png";
import axios from "axios";

function Adicionar() {
    const navigate = useNavigate(); // Inicializa o hook de navegação
    const { id } = useParams();
    const [cidade, setCidade] = useState(""); // Estado para armazenar o cidade da música
    const [rua, setRua] = useState(""); // Estado para armazenar o gênero da música
    const [bairro, setBairro] = useState(""); // Estado para armazenar o URL da bairro da música
    const [linkBarbearia, setLinkBarbearia] = useState(""); // Estado para armazenar o nome do linkBarbearia
    const [nome, setNome] = useState(""); // Estado para armazenar o nome da música
    const [cep, setCep] = useState(""); // Estado para armazenar o nome da música
    const [numero, setNumero] = useState(""); // Estado para armazenar o nome da música
    const [uf, setUf] = useState(""); // Estado para armazenar o nome da música
    const [foto, setFoto] = useState(""); // Estado para armazenar o nome da música


    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
    };

    const handCancel = () => { // Função chamada ao clicar em cancelar
        navigate("/clientes"); // Redireciona para a página de músicas
    };

    const handleSave = async () => {
        const options = {
            method: 'PUT',
            url: `http://localhost:8080/barbearias/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'insomnia/8.6.1',
                'Accept-Language': 'pt-br',
                Authorization: `Bearer ${sessionStorage.getItem("token")}`
            },
            data: {
                nome: nome,
                linkBarbearia: linkBarbearia,
                fotoBarbearia: foto,
                endereco: {
                    cidade: cidade,
                    cep: cep,
                    uf: uf,
                    rua: rua,
                    bairro: bairro,
                    numero: numero
                }
            }
        };
    
        axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success("Barbearia editada!"); // Exibe uma mensagem de sucesso
            navigate("/clientes"); // Redireciona para a página de músicas
        }).catch(function (error) {
            console.error(error);
            toast.error("Ocorreu um erro ao editar!"); // Exibe uma mensagem de erro se a requisição falhar
        });
    };

    useEffect(() => {
        const fetchData = async () => {


            const options = {
                method: 'GET',
                url: `http://localhost:8080/barbearias/${id}`,
                headers: {
                  'User-Agent': 'insomnia/8.6.1',
                  Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
              };
              
              axios.request(options).then(function (response) {
                console.log(response.data);
                const { data } = response;
                const { nome, linkBarbearia, fotoBarbearia, endereco } = data;
                const { rua, cidade, bairro, cep, numero, uf } = endereco;
                setNome(nome);
                setLinkBarbearia(linkBarbearia);
                setRua(rua);
                setCidade(cidade)
                setBairro(bairro);
                setCep(cep);
                setNumero(numero);
                setUf(uf);
                setFoto(fotoBarbearia);
              }).catch(function (error) {
                console.error(error);
              });
        };

        fetchData();
    }, [id]);


    useEffect(() => {
        const handleCepInput = (e) => {
            const cep = e.target.value;

            if (cep.length === 8) {
                const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

                fetch(apiUrl)
                    .then(response => response.json())
                    .then(data => {
                        if (!data.erro) {
                            setRua(data.logradouro);
                            setCidade(data.localidade);
                            setBairro(data.bairro);
                            setUf(data.uf);

                            toast.success("Endereço encontrado"); // Exibe uma mensagem de sucesso
                        } else {
                            toast.error("CEP não encontrado")
                        }
                    })
                    .catch(error => {
                        console.error("Erro na requisição: " + error);
                    });
            }
        };

        const cepInput = document.getElementById('IptCep');
        cepInput.addEventListener('input', handleCepInput);

        return () => {
            cepInput.removeEventListener('input', handleCepInput);
        };
    }, []);

    // const handleBack = () => { // Função chamada ao clicar em cancelar
    //     navigate("/parceiros"); // Redireciona para a página de músicas
    // };

    return (
        <>
            <div class="borda-gradiente-left">
                <div class="borda-gradiente-right">
                    <NavBarLogin /> {/* Componente NavBar com logo */}

                    <div className={styles["container-adicionar"]}> {/* Container principal para o formulário */}
                        <div className={styles["secao-esquerda-adicionar"]}> {/* Seção esquerda contendo o formulário */}
                            <h1>EDITAR BARBEARIA</h1> {/* Título do formulário */}
                            <form>
                                {/* Inputs para cada campo do formulário */}
                                {/* Chamar a função importada no onInput */}
                                <input type="text" onInput={inputSomenteTexto} value={nome} placeholder="Nome da Barbearia" onChange={(e) => handleInputChange(e, setNome)} />
                                <input type="text" value={linkBarbearia} placeholder="Link da Barbearia" onChange={(e) => handleInputChange(e, setLinkBarbearia)} />
                                <input type="text" maxLength={8} id="IptCep" value={cep} placeholder="CEP" onChange={(e) => handleInputChange(e, setCep)} />
                                <input type="text" value={rua} placeholder="Rua" onChange={(e) => handleInputChange(e, setRua)} />
                                <input type="text" value={cidade} placeholder="Cidade" onChange={(e) => handleInputChange(e, setCidade)} />
                                <input type="text" value={bairro} placeholder="Bairro" onChange={(e) => handleInputChange(e, setBairro)} />

                                <div className={styles["inputs-junto"]}>
                                    <input type="text" value={numero} placeholder="Número" onChange={(e) => handleInputChange(e, setNumero)} />
                                    <input type="text" maxLength={2} value={uf} placeholder="Uf" onChange={(e) => handleInputChange(e, setUf)} />
                                </div>

                                <input type="text" value={foto} placeholder="foto" onChange={(e) => handleInputChange(e, setFoto)} />
                                <br />
                                <div className={styles["buttons-container"]}> {/* Container para os botões de ação */}
                                    <button type="button" onClick={handleSave}>SALVAR</button> {/* Botão para salvar os dados */}
                                    <button type="button" onClick={handCancel}className={styles["button-cancelar"]}>CANCELAR</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Adicionar; // Exporta o componente Adicionar