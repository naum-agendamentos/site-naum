// Importa a biblioteca Axios.
import axios from "axios";

// Cria uma instância do Axios com configurações personalizadas.
const api = axios.create({
    baseURL: "http://44.209.54.84/"  // Endereço IP público do EC2 público
});

// Exporta a instância criada para que possa ser utilizada em outras partes do projeto.
export default api;
