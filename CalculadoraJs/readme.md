# Calculadora

## Primeiros passos
    [^1]Criar layout HTML/CSS
    [^2]No Javascript criar as variáveis que representam algumas coisas na calculadora
    tipo a tela, ou algum botão específico.
    [^3]Criar função **insert()**. Esta função vai inserir os caractéres na TELA da calculadora.
    Os caractéres que irão aparecer na tela, são os que forem passados lá no html dentro da chamada: **onclick="insert('1','2'...)"**. Em cada botão, coloque a função e o valor de cada botão seja esse valor um número ou um operador.

    **_ function insert(value){
    screen.innerHTML += value
    }_**
### O que a função insert() faz?
    Essa função vai inserir o caracter correspondente ao botão clicado. No HTML, em cada botão, a função deve ser chamada passando como argumento o valor do próprio botão.
    Exemplo: onclick="insert('1')".
    

    [^4]Crie a função **clean()**, que serve para limpar tudo o que foi escrito na tela.

    **_ 
        function clean(){
    screen.innerHTML = ''
    }
    _**
### O que a função clean() faz?
    Esta função vai substituir os dados que estão na tela por um caracter vazio. Ooi seja, vai apagar tudo que estiver na tela.


    [^5]Crie a função **backspace()** para apagar um caracter de cada vez.
    **_ 
        function backspace(){
    if(screen.textContent){
        let result = document.getElementById('output-value').innerHTML
        screen.innerHTML = result.substring(0, result.length - 1)
    }
}
    _**
### O que a função backspace() faz?
    Ela vai ler os valores que estão na tela , calcular o tamanho dos caractéres e diminuir 1 cada vez que o botão 'C' for clicado.



    [^6]Por fim, crie a função **equal()** para fazer as contas.
    **_
        function equal(){
    if(screen.textContent != 'Erro'){
        document.getElementById('output-value').innerHTML = eval(screen.innerHTML)
    }
}_**
### O que a função equal() faz?
Ela verifica se o que está na tela é DIFERENTE de algum erro. Isso vai retornar um TRUE e vai entrar dentro do bloco de instruções.
No bloco de instruções, o que estiver na tela (variável screen), será lido e será passado dentro da função: equal(). Esta função vai ler a tela e fazer a conta com os dados que estiverem lá dentro.