document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-cadastro');
    const submitBtn = document.getElementById('botao-cadastro');

    submitBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // validando os campos antes do envio
        const nomeViagem = document.getElementById('nome-viagem').value;
        const dataViagem = document.getElementById('data-viagem').value;
        const oceanTarget = document.getElementById('ocean-target').value;
        const descricaoViagem = document.getElementById('descricao-viagem').value;
        const quantidadeLixo = document.getElementById('quantidade-lixo').value;

        // Verificar se algum campo está vazio
        if (nomeViagem.trim() === '' || dataViagem.trim() === '' || oceanTarget.trim() === '' || descricaoViagem.trim() === '' || quantidadeLixo.trim() === '') {
            alert('Por favor, preencha todos os campos antes de enviar o formulário!');
            return; // Impede o envio do formulário se houver campos em branco
        }

        // verificando se tem dados antes
        let viagensSalvas = JSON.parse(localStorage.getItem('viagens')) || [];

        // Criar novo objeto de viagem
        const novaViagem = {
            nomeViagem,
            dataViagem,
            oceanTarget,
            descricaoViagem,
            quantidadeLixo,
        };

        // Adicionar a nova viagem à lista de viagens salvas
        viagensSalvas.push(novaViagem);

        // Salvar a lista atualizada de viagens no localStorage
        localStorage.setItem('viagens', JSON.stringify(viagensSalvas));

        alert('Viagem cadastrada com sucesso! Vá para a parte de consulta para mais detalhes!');

        // Limpar o formulário após o cadastro
        form.reset();
    });
});
