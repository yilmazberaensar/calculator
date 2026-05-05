const allButtons = document.querySelectorAll('.zbutton');
const allOperatoren = document.querySelectorAll('.op');
const gleichBtn = document.querySelector(".gleich");
const output = document.getElementById('output');
let num1 = "";
let num2 = "";
let operator = "";
let result = 0;
let opIndex = 0;
//reset vars
function reset(){
     num1 = "";
     num2 = "";
}

//addieren
function add(a,b){
    return Number(a) + Number(b)
}

function operate(op,numero1,numero2){
    let res = 0;
    if(operator == "+"){
     res = add(num1,num2);
     reset();
    }
    return res
}

for(let i = 0; i<allButtons.length;i++){
    allButtons[i].addEventListener("click",()=>{  
        //Hier die Funktion rein
        if(num1 === "" || operator == ""){
            num1 = num1 + allButtons[i].innerText;
            console.log(`num1 = ${num1}`)
        }else{
            num2 = num2 + allButtons[i].innerText;
            console.log(`num2 = ${num2}`)
        }

    })};

for(let i = 0; i<allOperatoren.length;i++){
    allOperatoren[i].addEventListener("click",()=>{
        //num1 darf nicht leer sein
        if(num1 !== "" ){
            operator = allOperatoren[i].innerText;
            console.log(operator)
            if(opIndex > 0){
                result = operate(operator,num1,num2);
                num1 = result;
                output.value = result;
            }
            opIndex++
        }else{
            console.error("num1 leer")
        }
    })
    };

//gleich click event hinzufügen
gleichBtn.addEventListener('click',()=>{
     result = operate(operator,num1,num2);
    output.value = result;
     console.log(`Result: ${result}`)
     opIndex = 0;
})