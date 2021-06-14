document.querySelector(".btn").addEventListener("click", function(){

let addition = (num1,num2) => num1 + num2;
let subtraction = (num1,num2) => num1 - num2;
let multiaplication = (num1,num2)=> num1 * num2;
let devider = (num1,num2)=> num1 / num2;

let num1 = parseFloat(document.querySelector(".num1").value);
let num2 = parseFloat(document.querySelector(".num2").value);

let selectValue = document.querySelector(".see").value;

if(selectValue== "addition"){
    document.querySelector(".show").innerHTML= addition(num1,num2);
}
else if(selectValue== "subtraction"){
    document.querySelector(".show").innerHTML= subtraction(num1,num2);
}
else if(selectValue== "multiaplication"){
    document.querySelector(".show").innerHTML= multiaplication(num1,num2);
}
else if(selectValue== "devider"){
    document.querySelector(".show").innerHTML= devider(num1,num2);
}
else{
    alert("Please selecr any option")
}

})
