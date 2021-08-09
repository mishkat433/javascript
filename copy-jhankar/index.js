
var randomButton = document.getElementById("randomButton");
randomButton.addEventListener("click", function(){
    var randomDisplay = document.getElementById("randomDisplay");
    randomDisplay.value = Math.floor(1000+Math.random()*9000)
})

function insert(number){
    var calcularorDisplay = document.getElementById("calcularorDisplay")
    var previous = calcularorDisplay.value
    calcularorDisplay.value= previous + number
}

function submitCode(){
    var randomDisplay = document.getElementById("randomDisplay").value;
    var calcularorDisplay = document.getElementById("calcularorDisplay").value;

    if(randomDisplay =="" || calcularorDisplay==""){
       alert("please click generate pin button and set this pin in calculator")
    }
    else if(randomDisplay== calcularorDisplay){
        var pinCorrect = document.getElementById("pinCorrect")
        pinCorrect.style.display = "block"
    }
    else{
        var pinIncorrect = document.getElementById("pinIncorrect")
        pinIncorrect.style.display = "block"
    }
}

var clearResult = document.getElementById("clearResult").addEventListener("click", function(){
    document.getElementById("calcularorDisplay").value = '';
})

function delet(){
    var calcularorDisplay = document.getElementById("calcularorDisplay");
    var previousValue = calcularorDisplay.value
    if (previousValue != "") {
    calcularorDisplay.value = calcularorDisplay.value.slice(0, -1)
    }
}

   
