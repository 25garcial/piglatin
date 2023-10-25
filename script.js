var inputs = document.querySelector(".inputs");
var output = document.querySelector(".output");
output.textContent="";

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
    var result=[];
    var consonantGroups= ["sh", "ch", "th"];
    var consonants = ["b","c", "d", "f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z"];
    for (var wordIndex=0; wordIndex<english.length; wordIndex++){
        var word=english[wordIndex];
        var pigWord="";

        if (consonantGroups.includes(consonant=english.slice(0,2))){
            word=word+consonant;
            pigWord=word.slice(2)+"ay";
        } 
        else if (consonants.includes(consonant=english.slice(0,1))){
            word=word+consonant;
            pigWord=word.slice(1)+"ay";
        }
        else{
            pigword=word+"way";
        }

        result.push(pigWord);
        alert(result);
    }
    result=result.join(" ");
    alert(result);
    return result;
}

function addData(newData){
    output.textContent+=newData;
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