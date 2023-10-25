
inputs = document.querySelector(".inputs");

function randomNum(maxInt){
    return Math.floor(Math.random()*maxInt);
}
 class textbox{
    
constructor(name){
    
    var textbox=document.createElement("input");
    textbox.placeholder=name;
    textbox.id=toString(randomNum(1000));


    inputs.appendChild(textbox);
    return textbox;
}

}

function convertToPiglatin(english){
    english=String(english);
    alert(`english: ${english}`);
    var consonantGroups= ["sh", "ch", "th"];
    var consonants = ["b","c", "d", "f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z"];
    alert(english.slice(2));
    alert(consonantGroups.includes(english.slice(2)));
    
    if (consonantGroups.includes(String(consonant)=english.slice(2))){
        alert(consonant);
    }
    return 0;

}

function main(){

var input = new textbox();
var english="";
submitButton = document.createElement("button");
submitButton.textContent="Convert to piglatin"
submitButton.addEventListener("click", ()=>{
    english=input.value;
    input.value="";
    var piglatin = convertToPiglatin(english);
});
inputs.appendChild(submitButton);

}

main();