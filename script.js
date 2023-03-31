const langBtn = document.getElementById('lang-btn');
const txtarea = document.getElementById('textcont');
const showarea = document.querySelector(".showarea");
const morsecode = {
    "A":".-",
    "B":"-...",
    "C":"-.-.",
    "D":"-..",
   "E":".",
    "F":"..-.",
    "H":"....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    " ":" ",
}

langBtn.addEventListener('click',function(){
    txtarea.value="";
    showarea.innerHTML="";
    document.querySelector('.main .translator .lang-opt').classList.toggle('swapped');
});
function submit() {

    if(!document.querySelector('.main .translator .lang-opt').classList.contains("swapped")){
    let engSentence = txtarea.value.toUpperCase();
    let morSentence = "";
    for (let i = 0; i < engSentence.length; i++) {
        if(engSentence.charAt(i)=="")
       morSentence +=(morsecode[engSentence.charAt(i)]==undefined? " ":morsecode[engSentence.charAt(i)]) + " " ;
        else
       morSentence +=(morsecode[engSentence.charAt(i)]==undefined?engSentence.charAt(i):morsecode[engSentence.charAt(i)]) + " " ;
    }
    showarea.innerHTML = morSentence;
    console.log(morSentence)
    console.log(engSentence)
    }
    else{
        let morSentence = txtarea.value.split(" ");
        console.log(morSentence)
        let engSentence = "";

        for (let i = 0; i < morSentence.length; i++) {
            if(morSentence[i]=="")
            engSentence += getKeyByValue(morsecode,morSentence[i])==undefined ? " " : getKeyByValue(morsecode,morSentence[i])
            else
            engSentence += getKeyByValue(morsecode,morSentence[i])==undefined ? morSentence[i] : getKeyByValue(morsecode,morSentence[i])

        }
        showarea.innerHTML=engSentence;
    }


};




//taking key from value function
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  
