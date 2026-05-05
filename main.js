const allButtons = document.querySelectorAll('.zbutton');
const allOperatoren = document.querySelectorAll('.op');
const gleichBtn = document.querySelector(".gleich");
const output = document.getElementById('output');
const resetBtn = document.querySelector(".reset");
let num1 = "";
let num2 = "";
let operator = [];
let result = 0;
let opIndex = 0;
//reset vars
function resetNums(){
     num1 = "";
     num2 = "";
}
function resetAll(){
      num1 = "";
 num2 = "";
 operator = [];
 result = 0;
 opIndex = 0;
 output.value = 0;
}

//addieren
function add(a,b){
    return Number(a) + Number(b)
}
//subtrahieren
function sub(a,b){
    return Number(a) - Number(b)
}
//multiplizieren
function multiply(a,b){
    return Number(a) * Number(b)
}

//dividieren
function div(a,b){
    if (Number(b) === 0) return "Nenene Versuch nochmal!"; // NEU
    return Number(a) / Number(b)
}

function operate(op,numero1,numero2){
    let res = 0;
    if(op == "+"){
     res = add(num1,num2);
     resetNums();
    }else if(op == "-"){
        res = sub(num1,num2);
        resetNums();
    }else if(op == "*"){
        res = multiply(num1,num2);
        resetNums();
    }else if(op == "/"){
        res = div(num1,num2);
        resetNums();
    }
    return res
}

/////////////////////////////////////////////////////////

for(let i = 0; i<allButtons.length;i++){
    allButtons[i].addEventListener("click",()=>{  
        //Hier die Funktion rein
        if(num1 === "" || operator[0] ==undefined){
            num1 = num1 + allButtons[i].innerText;
            output.value = num1;
            
        }else{
            num2 = num2 + allButtons[i].innerText;
            output.value =num1 + operator[opIndex-1] + num2;
            
        }

        console.log(`forNum ${num1},${num2},${operator},${opIndex}`)
    })};

for(let i = 0; i<allOperatoren.length;i++){
    allOperatoren[i].addEventListener("click",()=>{
        //num1 darf nicht leer sein
        if(num1 !== "" ){
            operator.push(allOperatoren[i].innerText);
            
            if(opIndex > 0){
                
                result = operate(operator[opIndex-1],num1,num2);
                num1 = result;
            output.value = num1 + operator[opIndex];
            }
            opIndex++
        }else{
            if(num1 == "" && operator.length != 0){
                num1 = result
                output.value = num1 + operator[opIndex];;
            }else{
            console.error("num1 leer");
        }}

        console.log(operator)
    })
    };

//gleich click event hinzufügen
gleichBtn.addEventListener('click',()=>{
        console.log(`gleich ${num1},${num2},${operator},${opIndex}`)
     result = operate(operator[opIndex-1],num1,num2);
    output.value = result;
     console.log(`Result: ${result}`)
     
});

resetBtn.addEventListener('click',()=>{
     resetAll();
});


