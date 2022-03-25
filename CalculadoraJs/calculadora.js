const screen = document.getElementById('output-value')



function insert(value){
    screen.innerHTML += value
}

function clean(){
    screen.innerHTML = ''
}


function backspace(){
    if(screen.textContent){
        let result = document.getElementById('output-value').innerHTML
        screen.innerHTML = result.substring(0, result.length -1)
    }
}

function equal(){
    if(screen.innerHTML != 'Erro'){
        document.getElementById('output-value').innerHTML = eval(screen.innerHTML)
    }
}
