var inputs = document.querySelector(".inputs");
var output = document.querySelector(".output");

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
    english=english.split(" ");
    var result=[];
    var consonantGroups= ["sh", "ch", "th"];
    var consonants = ["b","c", "d", "f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z"];
    for (var wordIndex=0; wordIndex<english.length; wordIndex++){
        var word=english[wordIndex];
        var newWord="";
        if (consonantGroups.includes(consonant=english.slice(0,2))){
            word=word+consonant;
            newWord=word.slice(2);
        } 
        else if (consonants.includes(consonant=english.slice(0,1))){
            word=word+consonant;
            newWord=word.slice(1);
        }
        result.push(newWord);
    }
    result=result.join(" ");
    return result;
}

function addData(newData){
output.textContent.push(newData);
}
function main(){    
var input = new textbox("Lorem Ipsum");
var english="";
submitButton = document.createElement("button");
submitButton.textContent="Convert to piglatin";
submitButton.addEventListener("click", ()=>{
    english=input.value;
    input.value="";
    var piglatin = convertToPiglatin(english);
    addData(piglatin);
});

inputs.appendChild(submitButton);

}

main();