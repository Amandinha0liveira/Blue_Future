document.addEventListener('DOMContentLoaded', function () {
    // Recuperar os dados do localStorage
    let viagensSalvas = JSON.parse(localStorage.getItem('viagens')) || [];

    // Função para atualizar a tabela com as viagens salvas
    function atualizarTabela() {
        const tbody = document.getElementById('tbody-consulta');
        tbody.innerHTML = ''; // Limpar o conteúdo atual da tabela

        // Iterar sobre todas as viagens salvas
        viagensSalvas.forEach(function(viagem) {
            // Criar uma nova linha na tabela
            const newRow = tbody.insertRow();
            
            // Inserir os dados da viagem nas células da linha
            const cellNome = newRow.insertCell(0);
            cellNome.textContent = viagem.nomeViagem;
            
            const cellData = newRow.insertCell(1);
            cellData.textContent = viagem.dataViagem;
            
            const cellLocal = newRow.insertCell(2);
            cellLocal.textContent = viagem.oceanTarget;
            
            const cellDescricao = newRow.insertCell(3);
            cellDescricao.textContent = viagem.descricaoViagem;
            
            const cellQuantidade = newRow.insertCell(4);
            cellQuantidade.textContent = viagem.quantidadeLixo + ' kg';

            const cellExcluir = newRow.insertCell(5);
            const imgExcluir = document.createElement('img');
            imgExcluir.src = 'https://images.vexels.com/media/users/3/223479/isolated/preview/8ecc75c9d0cf6d942cce96e196d4953f-cone-da-lixeira-plana.png'; 
            imgExcluir.alt = 'Excluir Registro';
            imgExcluir.classList.add('excluir-img');
            cellExcluir.appendChild(imgExcluir);
        });
    }

    // Adicionar evento de clique para excluir viagens
    document.getElementById('tbody-consulta').addEventListener('click', function (event) {
        const elementoClicado = event.target;

        if (elementoClicado.classList.contains('excluir-img')) {
            const linha = elementoClicado.closest('tr');
            const nomeViagem = linha.cells[0].textContent;

            if (confirm(`Tem certeza que deseja excluir a viagem "${nomeViagem}"?`)) {
                excluirViagem(nomeViagem);
                linha.remove();
                alert('Viagem excluída com sucesso!');
            }
        }
    });

    // Função para excluir uma viagem
    function excluirViagem(nomeViagem) {
        viagensSalvas = viagensSalvas.filter(viagem => viagem.nomeViagem !== nomeViagem);
        localStorage.setItem('viagens', JSON.stringify(viagensSalvas));
    }

    // Atualizar a tabela ao carregar a página
    atualizarTabela();
});
