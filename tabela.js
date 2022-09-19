
let nome = document.querySelector('#nome');
let cpf = document.querySelector('#cpf');
let rg = document.querySelector('#rg');
let nascimento = document.querySelector('#nascimento');

let form = document.querySelector('#form');

tabelaCabeçalho('Nome', 'CPF', 'RG', 'DN');

form.addEventListener('submit', event => {
    event.preventDefault();
    tabelaCorpo(nome, cpf, rg, nascimento)
    console.log(nome)
})



// tabela cabeçalho cria o titulo da tabela apenas
function tabelaCabeçalho(...arguments) {

    //busca o seletor table no DOM//
    let table = document.querySelector('table');

    // Cria a thead e a tr na table//
    let thead = document.createElement('thead');
    let tr = document.createElement('tr')
    
    thead.appendChild(tr);
    
    // Repassa a funcao celula para cada item repassado no paramentro arguments//
    arguments.forEach(celula);
        
    function celula(item) {
        let th = document.createElement('th');

        // estilos da tabela e das celulas 
        table.style.margin = 'auto auto'
        th.style.border = '1px solid black';
        th.style.fontSize = '20px';
        th.style.padding = '1em 2em'
        th.style.backgroundColor = 'lightgray'

        tr.appendChild(th)
        th.textContent = item
        console.log(item)        
    }
    
    table.appendChild(thead)
}



function tabelaCorpo(...arguments) {

    //busca o seletor table no DOM//
    let table = document.querySelector('table');

    // Cria a thead e a tr na table//
    let tbody = document.createElement('tbody');
    let tr = document.createElement('tr')
    
    tbody.appendChild(tr);
    
    // Repassa a funcao celula para cada item repassado no paramentro arguments//
    arguments.forEach(celula);
        
    function celula(item) {
        let td = document.createElement('th');

        // estilos da tabela e das celulas 
        table.style.margin = 'auto auto'
        td.style.border = '1px solid black';
        td.style.fontSize = '16px';
        td.style.padding = '1em 2em'

        tr.appendChild(td)
        td.textContent = item.value;
        console.log(item) 
    }
       
    table.appendChild(tbody)
}