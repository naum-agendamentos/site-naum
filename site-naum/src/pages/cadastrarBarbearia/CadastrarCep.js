
var cepInput = document.getElementById('IptCEPEndereco');
cepInput.addEventListener('input', function (e) {
    var cep = e.target.value;

    if (cep.length === 8) {
        var apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

        fetch(apiUrl).then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    // IptCidadeEndereco.value = data.localidade;
                    // IptBairroEndereco.value = data.bairro;
                    // IptEstadoEndereco.value = data.uf;
                } else {
                    console.log("Erro")
                }
            })
            .catch(error => {
                console.error("Erro na requisição: " + error);
            });
    }
});
