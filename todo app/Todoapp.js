var input = document.querySelector(".for");
var button = document.querySelector(".butt");
var col1 = document.querySelector(".col1");
var col2 = document.querySelector(".col2")

button.addEventListener("click", function (event) {
    var nece = input.value;
    added(nece);
     input.value = '';

})

function added(nece) {
    var tr = document.createElement("tr");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    var td = document.createElement("label");
    tr.className = "td";
    td.innerHTML = nece;
    console.log(tr)

    tr.appendChild(checkbox);
    tr.appendChild(td);
    col1.appendChild(tr);
    checkbox.addEventListener("click", function () {

        var tr = document.createElement("tr");
        var td = document.createElement("label");
        tr.className = "td";
        td.className = "d-flex"
        td.innerHTML = nece;
       
        col2.appendChild(tr)
        var span= document.createElement("button");
        span.innerHTML = "delet";
        span.className = "d-inline";
        span.className = "text-danger";
        
        tr.appendChild(td);
        td.appendChild(span);
        
        span.addEventListener("mouseup", function(){
            col2.removeChild(tr);
        })

    })
    checkbox.addEventListener("click", function(){
        col1.removeChild(tr);
    })
    

}



// function added2(){

// }
