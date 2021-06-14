
let input = document.querySelector("#input-area");
let character = document.querySelector(".char-count");
let word = document.querySelector(".word-count");
let clear = document.querySelector(".btn");

input.addEventListener("input", function(){

    // Character count
    let getCharacter = input.value.length;
    character.innerHTML = getCharacter;

    // word count
    let getInput = input.value;
    getInput = getInput.trim();
    let getWord= getInput.split(" ");

    if(getWord[0]==0){
        word.innerHTML = 0; 
    }
    else{
        word.innerHTML = getWord.length;
    }

})

clear.addEventListener("click", function(){
    input.value = " ";
    character.innerHTML = 0;
    word.innerHTML = 0;
})