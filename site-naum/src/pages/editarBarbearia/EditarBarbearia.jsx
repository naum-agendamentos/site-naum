import api from "../../api"; // Importa a API para comunicação com o backend
import { toast } from "react-toastify"; // Importa toast para exibir mensagens de sucesso ou erro
import React, { useState } from "react"; // Importa React e o hook useState para gerenciamento de estado
import styles from "./EditarBarbearia.module.css"; // Importa os estilos CSS para este componente
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate para redirecionamento de rotas
import NavBarLogin from "../../components/navbar/NavBarLogin"; // Importa o componente NavBar para a barra de navegação
import { inputSomenteTexto } from "../../utils/globals"; // Import da função global
//import imgNaum from "../../utils/assets/logos/NAUM.png";

function Adicionar() {
    const navigate = useNavigate(); // Inicializa o hook de navegação
    const [cidade, setcidade] = useState(""); // Estado para armazenar o cidade da música
    const [rua, setRua] = useState(""); // Estado para armazenar o gênero da música
    const [bairro, setbairro] = useState(""); // Estado para armazenar o URL da bairro da música
    const [linkBarbearia, setlinkBarbearia] = useState(""); // Estado para armazenar o nome do linkBarbearia
    const [nome, setnome] = useState(""); // Estado para armazenar o nome da música
    const [cep, setCep] = useState(""); // Estado para armazenar o nome da música
    const [numero, setNumero] = useState(""); // Estado para armazenar o nome da música
    const [uf, setUf] = useState(""); // Estado para armazenar o nome da música
    const [foto, setFoto] = useState(""); // Estado para armazenar o nome da música

    const handleSave = () => { // Função chamada ao clicar em salvar
        const objetoAdicionado = { // Cria um objeto com os dados do formulário
            nome,
            linkBarbearia,
            rua,
            cidade,
            bairro,
            cep,
            numero,
            uf,
            foto
        };

        // Faz uma requisição POST para a API
        api.post(``, objetoAdicionado).then(() => {
            toast.success("Novo Card criado com sucesso!"); // Exibe uma mensagem de sucesso
            sessionStorage.setItem("editado", JSON.stringify(objetoAdicionado)); // Armazena os dados na sessionStorage
            navigate("/parceiros"); // Redireciona para a página de músicas
        }).catch(() => {
            toast.error("Ocorreu um erro ao salvar os dados, por favor, tente novamente."); // Exibe uma mensagem de erro se a requisição falhar
        })
    };

    const handleInputChange = (event, setStateFunction) => { // Função para manipular as mudanças nos inputs
        setStateFunction(event.target.value); // Atualiza o estado correspondente
    }

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
                                <input type="text" onInput={inputSomenteTexto} value={nome} placeholder="Nome da Barbearia" onChange={(e) => handleInputChange(e, setnome)} />
                                <input type="text" value={linkBarbearia} placeholder="Link da Barbearia" onChange={(e) => handleInputChange(e, setlinkBarbearia)} />
                                <input type="text" value={cep} placeholder="Cep" onChange={(e) => handleInputChange(e, setCep)} />
                                <input type="text" value={rua} placeholder="Rua" onChange={(e) => handleInputChange(e, setRua)} />
                                <input type="text" value={cidade} placeholder="Cidade" onChange={(e) => handleInputChange(e, setcidade)} />
                                <input type="text" value={bairro} placeholder="Bairro" onChange={(e) => handleInputChange(e, setbairro)} />

                                <div className={styles["inputs-junto"]}>
                                    <input type="text" value={numero} placeholder="Número" onChange={(e) => handleInputChange(e, setNumero)} />
                                    <input type="text" value={uf} placeholder="Uf" onChange={(e) => handleInputChange(e, setUf)} />
                                </div>

                                <input type="text" value={foto} placeholder="foto" onChange={(e) => handleInputChange(e, setFoto)} />
                                <br />
                                <div className={styles["buttons-container"]}> {/* Container para os botões de ação */}
                                    <button type="button" onClick={handleSave}>EDITAR</button> {/* Botão para salvar os dados */}
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