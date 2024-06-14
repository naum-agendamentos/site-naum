
import { toast } from "react-toastify"; 
import React, { useState, useEffect } from "react"; 
import styles from "./CadastrarBarbearia.module.css"; 
import { useNavigate } from "react-router-dom";
import NavBarLogin from "../../components/navbar/NavBarLogin"; 
import { inputSomenteTexto } from "../../utils/globals"; 
import axios from "axios";

function Adicionar() {
    const navigate = useNavigate();
    const [cidade, setcidade] = useState(""); 
    const [rua, setRua] = useState(""); 
    const [bairro, setbairro] = useState(""); 
    const [linkBarbearia, setlinkBarbearia] = useState(""); 
    const [nome, setnome] = useState("");
    const [cep, setCep] = useState("");
    const [numero, setNumero] = useState("");
    const [uf, setUf] = useState(""); 
    const [foto, setFoto] = useState("");



    const [inputValidNomeBarb, setInputValidNomeBarb] = useState("input-form");


    const [inputValidLink, setInputValidLink] = useState("input-form");


    const [inputValidCep, setInputValidCep] = useState("input-form");


    const [inputValidRua, setInputValidRua] = useState("input-form");


    const [inputValidCidade, setInputValidCidade] = useState("input-form");


    const [inputValidBairro, setInputValidBairro] = useState("input-form");


    const [inputValidNumero, setInputValidNumero] = useState("input-form");


    const [inputValidUf, setInputValidUf] = useState("input-form");


    const [inputValidFoto, setInputValidFoto] = useState("input-form");

    const handleNomeBarbBlur = (event) => {
        const value = event.target.value;

        if (value === "") {
            toast.warn("Nome não pode estar vazio");
            setInputValidNomeBarb("input-error");
        } else {
            setInputValidNomeBarb("input-form");
        }
    }

    const handleLinkBlur = (event) => {
        const value = event.target.value;

        const regexUrl = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

        if (!value.match(regexUrl)) {
            toast.warn("Digite uma URL válida");
            setInputValidLink("input-error");
        } else {
            setInputValidLink("input-form");
        }
    }

    const handleCepBlur = (event) => {
        const value = event.target.value;

        if (value.length !== 8) {
            toast.warn("Digite um CEP válido");
            setInputValidCep("input-error");
        } else {
            setInputValidCep("input-form");
        }
    }

    const handleRuaBlur = (event) => {
        const value = event.target.value;

        if (value === "") {
            toast.warn("Rua não pode estar vazio");
            setInputValidRua("input-error");
        } else {
            setInputValidRua("input-form");
        }
    }

    const handleCidadeBlur = (event) => {
        const value = event.target.value;

        if (value === "") {
            toast.warn("Cidade não pode estar vazio");
            setInputValidCidade("input-error");
        } else {
            setInputValidCidade("input-form");
        }
    }

    const handleBairroBlur = (event) => {
        const value = event.target.value;

        if (value === "") {
            toast.warn("Bairro não pode estar vazio");
            setInputValidBairro("input-error");
        } else {
            setInputValidBairro("input-form");
        }
    }

    const handleNumeroBlur = (event) => {
        const value = event.target.value;

        if (value === "") {
            toast.warn("Numero não pode estar vazio");
            setInputValidNumero("input-error");
        } else {
            setInputValidNumero("input-form");
        }
    }

    const handleUfBlur = (event) => {
        const value = event.target.value;

        const regexUf = /^(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)$/i;

        const valueUp = value.toUpperCase();

        if (!valueUp.match(regexUf)) {
            toast.warn("Digite um Uf Válido");
            setInputValidUf("input-error");
        } else {
            setInputValidUf("input-form");
        }
    }

    const handleFotoBlur = (event) => {
        const value = event.target.value;

        const regexUrl = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

        if (!value.match(regexUrl)) {
            toast.warn("Digite uma URL válida");
            setInputValidFoto("input-error");
        } else {
            setInputValidFoto("input-form");
        }
    }


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
                            setcidade(data.localidade);
                            setbairro(data.bairro);
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


    const validateFields = () => {
        handleNomeBarbBlur({ target: { value: nome } });
        handleLinkBlur({ target: { value: linkBarbearia } });
        handleCepBlur({ target: { value: cep } });
        handleRuaBlur({ target: { value: rua } });
        handleCidadeBlur({ target: { value: cidade } });
        handleBairroBlur({ target: { value: bairro } });
        handleNumeroBlur({ target: { value: numero } });
        handleUfBlur({ target: { value: uf } });
        handleFotoBlur({ target: { value: foto } });
        
        return !(
            nome && linkBarbearia && cep && rua && cidade && bairro && numero && uf && foto
        );
    };



    const handleSave = () => { 

        

       

        if (validateFields()) {
            toast.warn("Preencha todos os campos corretamente.");
        } else {
            const options = {
                method: 'POST',
                url: 'http://localhost:8080/barbearias',
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
                toast.success("Nova barbearia adicionado com sucesso!"); 
                sessionStorage.setItem("editado", JSON.stringify(response.data)); 
                navigate("/clientes");
            }).catch(function (error) {
                console.error(error);
                toast.error("Ocorreu um erro ao salvar os dados, por favor, tente novamente."); 
            });

        }
    };

    const handleInputChange = (event, setStateFunction) => { 
        setStateFunction(event.target.value); 
    }

    // const handleBack = () => { 
    //     navigate("/parceiros"); 
    // };


    return (
        <>
            <div class="borda-gradiente-left">
                <div class="borda-gradiente-right">
                    <NavBarLogin /> 

                    <div className={styles["container-adicionar"]}>
                        <div className={styles["secao-esquerda-adicionar"]}> 
                            <h1>CADASTRAR BARBEARIA</h1>
                            <form>
                            
                                <input type="text" className={styles[inputValidNomeBarb]} onInput={inputSomenteTexto} value={nome} onBlur={handleNomeBarbBlur} placeholder="Nome da Barbearia" onChange={(e) => handleInputChange(e, setnome)} />
                                <input type="text" className={styles[inputValidLink]} value={linkBarbearia} onBlur={handleLinkBlur} placeholder="Link da Barbearia" onChange={(e) => handleInputChange(e, setlinkBarbearia)} />
                                <input type="text" className={styles[inputValidCep]} maxLength={8} id="IptCep" value={cep} onBlur={handleCepBlur} placeholder="CEP" onChange={(e) => handleInputChange(e, setCep)} />
                                <input type="text" className={styles[inputValidRua]} value={rua} onBlur={handleRuaBlur} placeholder="Rua" onChange={(e) => handleInputChange(e, setRua)} />
                                <input type="text" className={styles[inputValidCidade]} value={cidade} onBlur={handleCidadeBlur} placeholder="Cidade" onChange={(e) => handleInputChange(e, setcidade)} />
                                <input type="text" className={styles[inputValidBairro]} value={bairro} onBlur={handleBairroBlur} placeholder="Bairro" onChange={(e) => handleInputChange(e, setbairro)} />

                                <div className={styles["inputs-junto"]}>
                                    <input type="text" className={styles[inputValidNumero]} value={numero} onBlur={handleNumeroBlur} placeholder="Número" onChange={(e) => handleInputChange(e, setNumero)} />
                                    <input type="text" className={styles[inputValidUf]} maxLength={2} value={uf} onBlur={handleUfBlur} placeholder="Uf" onChange={(e) => handleInputChange(e, setUf)} />
                                </div>

                                <input type="text" className={styles[inputValidFoto]} value={foto} onBlur={handleFotoBlur} placeholder="foto" onChange={(e) => handleInputChange(e, setFoto)} />
                                <br />
                                <div className={styles["buttons-container"]}> 
                                    <button type="button" onClick={handleSave}>CADASTRAR</button> 
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Adicionar; 