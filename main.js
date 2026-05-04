function delZero(a,b){
   if( a.charAt(0) === '0')
{
 a = a.substring(1);
}
if( b.charAt(0) === '0')
{
 b = a.substring(1);
 return a, b
}}

function setErgebnis(str){
    output.innerText = str
}

function add(a,b){
    delZero(a,b)
    a = Number(a);
    b = Number(b)
    return a + b
}


let ersteZiffer = "0";
let zweiteZiffer = "0";
let operator = "";
let ergebnis ="";

const allButtons = document.querySelectorAll('.zbutton');
const allOperatoren = document.querySelectorAll('.op');
const gleichBtn = document.querySelector(".gleich");
const output = document.getElementById('output');


//fügen den Button per click ein Event hinzu
for(let i = 0; i<allButtons.length;i++){
    allButtons[i].addEventListener("click",()=>{
        if(operator == ""){
            ersteZiffer = ersteZiffer + allButtons[i].innerText;
            console.log(ersteZiffer)
        }else{
            zweiteZiffer = zweiteZiffer + allButtons[i].innerText;
            console.log(zweiteZiffer)
        }
    });
};

//füge Operatoren hinzu
for(let i = 0; i<allOperatoren.length;i++){
    allOperatoren[i].addEventListener("click",()=>{
        if(ersteZiffer !== "0"){
            operator = allOperatoren[i].innerText;
            console.log(operator)
        }else{
            console.error("keine erste Ziffer");
        }
    });
};

//gleich click event hinzufügen
gleichBtn.addEventListener('click',()=>{
     if(operator == "+"){
      ergebnis=  add(ersteZiffer,zweiteZiffer)
      console.log(ergebnis)
      setErgebnis(ergebnis);
     }else{

     }
})

