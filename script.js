var tela = document.getElementById("display")
var btns = document.getElementsByTagName("button");
var aux = ""

function pressed(v){
    aux = aux + v
    tela.innerHTML = aux
}

function clearAll (){
    aux = ""
    tela.innerHTML = "";
}

function calculate(){
    aux = eval(aux)
    tela.innerHTML = aux
}

function backspace(){
    aux = aux.slice(0, -1);
    tela.innerHTML = aux
}

document.addEventListener("keydown", (event) => {

    const tecla = event.key

    if ("0123456789+-*/.".includes(tecla)) {
        tela.innerHTML += tecla
    }

    if (tecla === "Enter") {
        tela.innerHTML = eval(tela.innerHTML);
    }

    if (tecla === "Backspace") {
        tela.innerHTML = tela.innerHTML.slice(0,-1)
    }

    if (tecla === "Escape") {
        tela.innerHTML = ""
    }
});

//condicional ao pressionar event key e ele se enter, ele fazer o calculate