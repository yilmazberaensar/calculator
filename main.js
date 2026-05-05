const allButtons = document.querySelectorAll('.zbutton');
const allOperatoren = document.querySelectorAll('.op');
const gleichBtn = document.querySelector(".gleich");
const output = document.getElementById('output');
let num1 = "";
let num2 = "";
let operator = [];
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

function sub(a,b){
    console.log(`inSub ${a,b}`);
    return Number(a) - Number(b)
}

function operate(op,numero1,numero2){

        console.log(`operate ${numero1}, ${numero2}, ${op}`)
    let res = 0;
    if(op == "+"){
     res = add(num1,num2);
     reset();
    }else if(op == "-"){
        res = sub(num1,num2);
        reset();
    }
    return res
}

for(let i = 0; i<allButtons.length;i++){
    allButtons[i].addEventListener("click",()=>{  
        //Hier die Funktion rein
        if(num1 === "" || operator[0] ==undefined){
            num1 = num1 + allButtons[i].innerText;
            
        }else{
            num2 = num2 + allButtons[i].innerText;
            
        }

        console.log(`forNum ${num1},${num2},${operator},${opIndex}`)
    })};

for(let i = 0; i<allOperatoren.length;i++){
    allOperatoren[i].addEventListener("click",()=>{
        //num1 darf nicht leer sein
        if(num1 !== "" ){
            operator.push(allOperatoren[i].innerText);
            
            if(opIndex > 0){
                
                let op = operator[opIndex-1];
                result = operate(op,num1,num2);
                num1 = result;
                output.value = result;
            }
            opIndex++
        }else{
            if(num1 == "" && operator.length != 0){
                num1 = result
            }else{
            console.error("num1 leer")
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
     
})