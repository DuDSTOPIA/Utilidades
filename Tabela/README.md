
PROGRAMA DE CRIAÇÃO DE TABELA (VERTICAL POR ENQUANTO)

Durante meus cursos, sempre acabo me esbarrando com a nescessidade de criar tabelas para diferentes finalidades. Por isso criei esse programa pra facilitar minha vida quando precisar de uma.

Modo de usar:

- First thisgs first: coloca o arquivo na pasta do projeto e importa as funções. O arquivo tem basicamente duas funções:

01. constroi_Form_e_cabecalho_Tabela() que cria o formulario e o titulo da tabela.
   
    A lista de inputs do formulario e de titulo da tabela, são os parametros da função. 

    Ex: constroi_Form_e_cabecalho_Tabela('Nome', 'CPF', 'RG', 'DataNasc')

    lembrando que esse parametro é um array, entao pode ser quantos parametros quizer, mas eu configurei o css padrao para o tamanho da tabela de 4 a 6 parametros. Se for usar mais que isso, observa se será nescessario diminuir um pouco as fontes e espassamentos. o arquivo é pequeno da pra achar facil, são 3:   Form, botao e celulas.

    ==>   Uma ultima coisa sobre a primeira função, eu nao adicionei nenhum tipo de regra pra maiuscula ou minuscula. Do jeito que for escrito nos parametros vai aparecer no form e no titulo da tabela. Acho que essa é uma questão do contexto de uso da tabela.

02. constroi_corpo_tabela(): Faz com que tudo que for digitado no formulario seja incluido nas celulas do corpo da tabela ou (td) da tabela.

    Como você pode ver no arquivo main.js, a primeira função é só importar e colocar os parametros. Mas essa segunda, você coloca em um addEventListener, os parametros são os mesmos. Só na base do Ctrl + C, Ctrl + V; Não importa o capslock ativo ou nao, por padrao ele converte pra minuscula pra usar como id e class, lembra disso quando for estilizzar.

