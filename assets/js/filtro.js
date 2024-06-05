document.addEventListener('DOMContentLoaded', function () {
    const filterInput = document.getElementById('filterInput');

    filterInput.addEventListener('input', function () {
        const filterValue = this.value.trim().toLowerCase(); // Obtém o valor do campo de pesquisa

        const rows = document.querySelectorAll('#tabela-consulta tbody tr');

        rows.forEach(row => {
            const nomeViagem = row.cells[0].textContent.trim().toLowerCase(); 
            const dataViagem = row.cells[1].textContent.trim().toLowerCase(); 
            const localViagem = row.cells[2].textContent.trim().toLowerCase(); 

            // Verifica se o valor de pesquisa está contido em alguma das células da linha
            if (nomeViagem.includes(filterValue) || dataViagem.includes(filterValue) || localViagem.includes(filterValue)) {
                row.style.display = ''; // Exibe a linha se corresponder ao filtro
            } else {
                row.style.display = 'none'; // Oculta a linha se não corresponder ao filtro
            }
        });
    });
});
