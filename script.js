function randomNum(maxInt){
    return Math.floor(Math.random()*maxInt);
}
class textbox{
    inputs = window.document.querySelector(".inputs");

constructor(name){
    
    var textbox=document.createElement("input");
    textbox.placeholder=name;
    textbox.id=toString(randomNum(1000));


    inputs.appendChild(textbox);
    return textbox;
}

}

function convertToPiglatin(){
    
}

function main(){
var input = new textbox();
submitButton = document.createElement("button");
var english="";
submitButton.addEventListener("click", ()=>{
    english=input.value;
    input.value="";
    convertToPiglatin();
});

}