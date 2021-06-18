//  select table id
var id = document.getElementById("id");
var nam = document.getElementById("name");
var number = document.getElementById("number");
var butt = document.querySelector(".butt")
var bookList = document.getElementById("book-list");
var warn = document.querySelector(".warning");
var war = document.querySelectorAll(".warn");

butt.addEventListener("click", function(e){
    e.preventDefault();

    checkId(id);
    checkNam(nam);
    checkNumber(number)

    // validity check
    function checkId(){
        if(id.value == '' ){
            war[0].innerHTML = "Please fill out this field";
       }
       else{
        war[0].style.display = "none";
    }
    }

    function checkNam(){
        if(nam.value== ''){
            war[1].innerHTML = "Please fill out this field";
           }
        else{
            war[1].style.display = "none";
        }
    }

    function checkNumber(){
        if(number.value== ''){
            war[2].innerHTML = "Please fill out this field";
        }
        else{
            war[2].style.display = "none";
        }
    }
  
    // adding list
    if(id.value != '' && nam.value != '' && number.value != ''){
        var newRow = document.createElement("tr");
       
        var newId = document.createElement("td");
        newId.innerHTML = id.value;
        newRow.appendChild(newId);

        var newNam = document.createElement("td");
        newNam.innerHTML = nam.value;
        newRow.appendChild(newNam);

        var newNumber = document.createElement("td");
        newNumber.innerHTML = number.value;
        newRow.appendChild(newNumber);

        bookList.appendChild(newRow);
    }    
})

// clear list
document.querySelector(".clear").addEventListener("click", function(e){
    e.preventDefault();
    var cle = id.value='';
    var clea = nam.value= '';
    var clen = number.value= '';
})
