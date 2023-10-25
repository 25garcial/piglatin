var inputs = document.querySelector(".inputs");
var output = document.querySelector(".output");

function randomNum(maxInt){
    return Math.floor(Math.random()*maxInt);
}

class textbox{    
 constructor(name){
    
    var textbox=document.createElement("input");
    textbox.placeholder=name;
    textbox.id=String(randomNum(1000));

    inputs.appendChild(textbox);
    return textbox;
}
}

function convertToPiglatin(english){
    english=english.split(" ");
    var result="";
    var consonantGroups= ["sh", "ch", "th"];
    var consonants = ["b","c", "d", "f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z"];
    var consonant="";

    for (var wordIndex=0; wordIndex<english.length; wordIndex++){
        var word=english[wordIndex];
        var pigWord="";
       
        if (consonantGroups.includes(consonant=english[wordIndex].slice(0,2).toLowerCase())){
            pigWord=word.slice(2)+consonant+"ay";
        } 
        else if (consonants.includes(consonant=english[wordIndex].slice(0,1).toLowerCase())){
            
            pigWord=word.slice(1)+consonant+"ay";
        }
        else{
            pigWord=word+"way";
        }

        result+=" "+pigWord;
    }
    
    return result;
}

function addData(newData){
    output.innerHTML=newData;
}





function main(){    
var input = new textbox("Lorem Ipsum");
var english="";
var submitButton = document.createElement("button");
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
