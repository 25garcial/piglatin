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
    const punctuations=[".", ",", "?","!"];
    var consonantGroups= ["sh", "ch", "th"];
    var consonants = ["b","c", "d", "f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z"];
    var consonant="";

    for (var wordIndex=0; wordIndex<english.length; wordIndex++){
        var word=english[wordIndex];
        var pigWord="";
       
        if (consonantGroups.includes(consonant=english[wordIndex].slice(0,2).toLowerCase())){
            if (punctuations.includes(word.slice(this.length-1))){
                pigWord=word.slice(2,word.length-1)+consonant+"ay"+word.slice(word.length-1);
                
            }else{
                pigWord=word.slice(2)+consonant+"ay";
            }
            
           
        } 
        else if (consonants.includes(consonant=english[wordIndex].slice(0,1).toLowerCase())){
            if (punctuations.includes(word.slice(this.length-1))){
                pigWord=word.slice(1,word.length-1)+consonant+"ay"+word.slice(word.length-1);
                
            }else{
                pigWord=word.slice(1)+consonant+"ay";
            }

          
        }
        else{
            if (punctuations.includes(word.slice(this.length-1))){
                pigWord=word.slice(0,word.length-1)+"way"+word.slice(word.length-1);
                
            }else{
                pigWord=word+"way";
            }
            
        }
        
        if (wordIndex==0){
            pigWord=pigWord.slice(0,1).toUpperCase()+pigWord.slice(1);
        } else if(punctuations.includes(result.slice(-2,-1)) && result.slice(-2,-1)!=","){
            
            pigWord=pigWord.slice(0,1).toUpperCase()+pigWord.slice(1);
        }
        result+=pigWord+" ";
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
