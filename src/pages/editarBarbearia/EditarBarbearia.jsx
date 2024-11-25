import { toast } from "react-toastify";
import React, { useEffect, useState, useRef } from "react";
import styles from "./EditarBarbearia.module.css"; 
import { useNavigate, useParams } from "react-router-dom"; 
import NavBarLogin from "../../components/navbarLogin/NavBarLogin"; 
import { inputSomenteTexto } from "../../utils/globals"; 
import axios from "axios";
import api from "../../api";
import CloudinaryUploader from "../../components/uploadImg/CloudinaryUploader";

function Adicionar() {
    const navigate = useNavigate(); 
    const { id } = useParams();
    const [cidade, setCidade] = useState(""); 
    const [rua, setRua] = useState(""); 
    const [bairro, setBairro] = useState(""); 
    const [linkBarbearia, setLinkBarbearia] = useState(""); 
    const [nome, setNome] = useState(""); 
    const [cep, setCep] = useState(""); 
    const [numero, setNumero] = useState("");
    const [uf, setUf] = useState(""); 
    const [foto, setFoto] = useState(""); 

    const handleInputChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
    };

    const handCancel = () => { 
        navigate("/clientes"); 
    };

    const [inputValidNomeBarb, setInputValidNomeBarb] = useState("input-form");
    const [inputValidLink, setInputValidLink] = useState("input-form");
    const [inputValidCep, setInputValidCep] = useState("input-form");
    const [inputValidRua, setInputValidRua] = useState("input-form");
    const [inputValidCidade, setInputValidCidade] = useState("input-form");
    const [inputValidBairro, setInputValidBairro] = useState("input-form");
    const [inputValidNumero, setInputValidNumero] = useState("input-form");
    const [inputValidUf, setInputValidUf] = useState("input-form");
    const [inputValidFoto, setInputValidFoto] = useState("botao-up-img");

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
            toast.warn("Número não pode estar vazio");
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
            toast.warn("Digite uma UF válida");
            setInputValidUf("input-error");
        } else {
            setInputValidUf("input-form");
        }
    }

    const handleFotoBlur = (event) => {
        const value = event.target.value;
        if (value === "") {
            toast.warn("Insira uma imagem");
            setInputValidFoto("input-error");
        } else {
            setInputValidFoto("botao-up-img");
        }
    };

    const validateFields = () => {
        return !(
            nome && linkBarbearia && cep && rua && cidade && bairro && numero && uf && foto
        );
    };

    const handleSave = async () => {
        if (!validateFields()) {
            const options = {
                method: 'PUT',
                url: `barbearias/${id}`,
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

            api.request(options).then(function (response) {
                console.log(response.data);
                toast.success("Barbearia editada!");
                navigate("/clientes");
            }).catch(function (error) {
                console.error(error);
                toast.error("Ocorreu um erro ao editar!"); 
            });
        } else {
            toast.warn("Preencha todos os campos corretamente.");
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: `barbearias/${id}`,
                headers: {
                  'User-Agent': 'insomnia/8.6.1',
                  Authorization: `Bearer ${sessionStorage.getItem("token")}`
                }
              };
              
              api.request(options).then(function (response) {
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

                            toast.success("Endereço encontrado"); 
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

    const fileInputRef = useRef(null);
    const [nomeImg, setNomeImg] = useState("Carregar Nova Imagem");
    const [selectedFile, setSelectedFile] = useState(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log('Imagem selecionada:', file.name);
            setNomeImg(file.name);
            setSelectedFile(file);
        }
    };

    return (
        <>
            <div className="borda-gradiente-left">
                <div className="borda-gradiente-right">
                    <NavBarLogin />
                    <div className={styles["container-adicionar"]}> 
                        <div className={styles["secao-esquerda-adicionar"]}> 
                            <h1>EDITAR BARBEARIA</h1> 
                            <form>
                                <input type="text" className={styles[inputValidNomeBarb]} onInput={inputSomenteTexto} value={nome} onBlur={handleNomeBarbBlur} placeholder="Nome da Barbearia" onChange={(e) => handleInputChange(e, setNome)} />
                                <input type="text" className={styles[inputValidLink]} value={linkBarbearia} onBlur={handleLinkBlur} placeholder="Link da Barbearia" onChange={(e) => handleInputChange(e, setLinkBarbearia)} />
                                <input type="text" className={styles[inputValidCep]} maxLength={8} id="IptCep" value={cep} onBlur={handleCepBlur} placeholder="CEP" onChange={(e) => handleInputChange(e, setCep)} />
                                <input type="text" className={styles[inputValidRua]} value={rua} onBlur={handleRuaBlur} placeholder="Rua" onChange={(e) => handleInputChange(e, setRua)} />
                                <input type="text" className={styles[inputValidCidade]} value={cidade} onBlur={handleCidadeBlur} placeholder="Cidade" onChange={(e) => handleInputChange(e, setCidade)} />
                                <input type="text" className={styles[inputValidBairro]} value={bairro} onBlur={handleBairroBlur} placeholder="Bairro" onChange={(e) => handleInputChange(e, setBairro)} />
                                <div className={styles["inputs-junto"]}>
                                    <input type="text" className={styles[inputValidNumero]} value={numero} onBlur={handleNumeroBlur} placeholder="Número" onChange={(e) => handleInputChange(e, setNumero)} />
                                    <input type="text" className={styles[inputValidUf]} maxLength={2} value={uf} onBlur={handleUfBlur} placeholder="UF" onChange={(e) => handleInputChange(e, setUf)} />
                                </div>
                                <button
                                    className={styles[inputValidFoto]}
                                    type="button"
                                    onClick={handleButtonClick}
                                >
                                    <svg
                                        aria-hidden="true"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeWidth="2"
                                            stroke="#ffffff"
                                            d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                            stroke="#ffffff"
                                            d="M17 15V18M17 21V18M17 18H14M17 18H20"
                                        />
                                    </svg>
                                    {nomeImg}
                                </button>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                                {selectedFile && (
                                    <CloudinaryUploader
                                        file={selectedFile}
                                        onUploadComplete={(url) => {
                                            setFoto(url);
                                        }}
                                    />
                                )}
                                <br />
                                <div className={styles["buttons-container"]}> 
                                    <button type="button" onClick={handleSave}>SALVAR</button>
                                    <button type="button" onClick={handCancel} className={styles["button-cancelar"]}>CANCELAR</button>
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
