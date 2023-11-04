document.getElementById('mostrarFormulario').addEventListener('click', function() {
    fetch('forms.html') // Substitua 'form-login.html' pelo caminho do seu arquivo de formulário de login.
        .then(response => response.text())
        .then(data => {
            document.getElementById('conteudo').innerHTML = data;
        })
        .catch(error => {
            console.error('Ocorreu um erro ao carregar o formulário de login: ' + error);
        });
});
