

document.querySelector(".btn").addEventListener("click", function(){
    let num1 = parseInt(document.querySelector(".one").value);
    let num2 = parseInt(document.querySelector(".tow").value);
    let show = document.querySelector(".show");
    let clear = document.querySelector("clear");
    let selec = document.querySelector("#opt").value;
    if(selec=="sum"){
        show.innerHTML = num1 + num2;
    }
    else if(selec == "subtraction"){
        show.innerHTML = num1 - num2;
    }
    else if(selec== "multiaplication"){
        show.innerHTML =num1 * num2;
    }
    else if(selec=="devider"){
        show.innerHTML = num1 / num2;
    }
    else{
        alert("Please select any option");
    }

     
});
