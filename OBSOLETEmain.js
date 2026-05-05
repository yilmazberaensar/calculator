function setErgebnis(arr){
    output.value = x;
    return x
}

function add(a,b){
    a = Number(a);
    b = Number(b)
    return a + b
}


let ziffern = [];
let operator = [];
let ergebnis =[];
let index = -1;
let oIndex = -1;

const allButtons = document.querySelectorAll('.zbutton');
const allOperatoren = document.querySelectorAll('.op');
const gleichBtn = document.querySelector(".gleich");
const output = document.getElementById('output');


//fügen den Button per click ein Event hinzu
for(let i = 0; i<allButtons.length;i++){
    allButtons[i].addEventListener("click",()=>{       
    if(operator.length < 0){
        ziffern.push(allButtons[i].innerText);
    index++
    output.value = ziffern[index];
    console.log(`${ziffern} +"  " + ${index}`)
    }
        if(ziffern.length > 2 && operator.length > 1)
            {
                console.log(`Ergebnis ${ergebnis}`)
            ergebnis.push(add(ergebnis[0],ziffern[index]));
            ergebnis.reduce((accum,item)=>{
        return accum + item
        },0);
        console.log(ergebnis)
            }
    });
};

//füge Operatoren hinzu
for(let i = 0; i<allOperatoren.length;i++){
    allOperatoren[i].addEventListener("click",()=>{
        //ziffern darf nicht leer sein
        if(ziffern[index] !== ""){
            operator.push(allOperatoren[i].innerText);
            oIndex++
            //output.value = toString(operator[oIndex])
            console.log(operator)
        }else{
            console.error("keine erste Ziffer");
        }
    });
};

//gleich click event hinzufügen
gleichBtn.addEventListener('click',()=>{
     if(operator[0] == "+"){
        //Ergbnis für die ersten beiden Ziffern wird berechnet
      ergebnis.push(add(ziffern[0],ziffern[1]));
      console.log(ergebnis)
     }else{

     }
})

