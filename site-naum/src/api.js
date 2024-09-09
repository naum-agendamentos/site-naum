// Importa a biblioteca Axios.
import axios from "axios";

// Cria uma instância do Axios com configurações personalizadas.
const api = axios.create({
    
    baseURL: "http://localhost:8080/"
});
    
// Exporta a instância criada para que possa ser utilizada em outras partes do projeto.
export default api;
