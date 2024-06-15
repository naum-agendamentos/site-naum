function entrar() {
    var email = document.getElementById("input_email").value;
    var senha = document.getElementById("input_senha").value;
    
    // Perform login validations here
    if (email === "") {
        alert("Por favor, insira um email válido.");
        return;
    }
    
    if (senha === "") {
        alert("Por favor, insira uma senha válida.");
        return;
    }else{
        window.location.href = "cadastroContaBarbearia.html";
    }
    
}