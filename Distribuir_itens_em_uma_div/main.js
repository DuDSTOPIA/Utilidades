

var lista = [
    {nome:'Eduardo', sobrenome:'Domiciano', idade: 30},
    {nome:'Carlos', sobrenome:'Oliveira', idade: 31},
    {nome:'Jill', sobrenome:'Valentine', idade: 32},
    {nome:'Chris', sobrenome:'Redfield', idade: 33},
    {nome:'Leon', sobrenome:'Kennedy', idade: 34},
    {nome:'Cleare', sobrenome:'Redfield', idade: 35},
    {nome:'Ada', sobrenome:'Wong', idade: 36},
]

function distribuicao_de_blocos_em_uma_section(list) {
    section = document.querySelector('.distribuição')
    lista.forEach(item => {
        let div = document.createElement('div')
        // Esse é o modelo HTML que será replicado
        let model = `<div class='modelo'>
                        <h1 class='item'>Nome: ${item.nome}</h1>
                        <h1 class='item'>Sobrenome: ${item.sobrenome}</h1>
                        <h1 class='item'>idade: ${item.idade}</h1>
                    </div>`
        section.appendChild(div)
        div.innerHTML = model
    })
}
//chamando a função
distribuicao_de_blocos_em_uma_section(lista)
