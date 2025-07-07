const butons = document.querySelector(".botones");
const butons2 = document.querySelector(".operandos")
const input1 = document.getElementById("input1");
const equals = document.getElementById("boton=");

let operadorActual;
const allowedKeys = ["0","1","2","3","4","5","6","7","8","9",".","*","+","/","-","Enter","Backspace"];
 
function getAdd(value1,value2){
    let totalResult = +value1 + +value2;
    input1.value = totalResult;
}
function getSubstract(value1,value2){
    let totalResult = +value1 - +value2;
    input1.value = totalResult;
}
function getMultiply(value1,value2){
    let totalResult = +value1 * +value2;
    input1.value = totalResult;
}
function getDivide(value1,value2){
    let totalResult;
    if(value1 == 0 && value2 == 0){
        totalResult = "Good try :D";
        input1.value = totalResult;
        return input1.value;
    }
    totalResult = +value1 / +value2;
    input1.value = totalResult;
}
function operate(arr,opAct){
    let arr1 = arr[0];
    let arr2 = arr[1];
    switch(opAct){
        case "+":
            getAdd(arr1,arr2);
            break;
        case "/":
            getDivide(arr1,arr2);
            break;
        case "-":
            getSubstract(arr1,arr2);
            break;
        case "*":
            getMultiply(arr1,arr2);
            break;
    }
}
function getNumbers(e){}

butons.addEventListener("click",(e) => {
    let target = e.target;
    switch(target.id){
        case "boton9":
            input1.value += 9;
            break;
        case "boton8":
            input1.value += 8;
            break;
        case "boton7":
            input1.value += 7;
            break;
        case "boton6":
            input1.value += 6;
            break;  
        case "boton5":
            input1.value += 5;
            break; 
        case "boton4":
            input1.value += 4;
            break; 
        case "boton3":
            input1.value += 3;
            break; 
        case "boton2":
            input1.value += 2;
            break; 
        case "boton1":
            input1.value += 1;
            break;
        case "boton0":
            input1.value += 0;
            break;  
        case "boton.":
            if( input1.value.includes("-") || input1.value.includes("+") || input1.value.includes("*") || input1.value.includes("/") ){
                let pointCheck = input1.value.split(operadorActual);
                if(pointCheck[1].includes(".")){
                    return;
                }
                input1.value +=".";
            }
            if(input1.value.includes(".")){
                return;
            }
            input1.value += ".";
            break; 
        case "botonc":
            input1.value = "";
            break; 
    }
});
butons2.addEventListener("click",(e) => {
    let target = e.target;
    if( input1.value.includes("-") || input1.value.includes("+") || input1.value.includes("*") || input1.value.includes("/") ){
        return;
    }
    if(input1.value == ""){
        return;
    }
    switch(target.id){
        case "boton/":
            operadorActual = "/";
            input1.value += "/";
            break;
        case "botonx":
            operadorActual = "*";
            input1.value += "*";
            break;
        case "boton-":
            operadorActual = "-";
            input1.value += "-";
            break;
        case "boton+":
            operadorActual = "+";
            input1.value += "+";
            break;
    }
});
equals.addEventListener("click",() =>{
    let input1Arr;
    if( input1.value.includes("-") || input1.value.includes("+") || input1.value.includes("*") || input1.value.includes("/") ){
        input1Arr = input1.value.split(operadorActual); 
    }else{
        alert("Oops! Looks like you're missing a number or operator.");
        return;
    }
    if(input1Arr[1] == ""){
        alert("Oops! Looks like you're missing a number or operator.");
        return;
    }
    operate(input1Arr, operadorActual);
});

document.addEventListener("keydown",(e) =>{
    let input1Arr;
    e.preventDefault();
    if(!(allowedKeys.includes(e.key))){
        e.preventDefault();
        return;
    }else{
        switch(e.key){
            case "9":
                input1.value += 9;
                break;
            case "8":
                input1.value += 8;
                break;
            case "7":
                input1.value += 7;
                break;
            case "6":
                input1.value += 6;
                break;  
            case "5":
                input1.value += 5;
                break; 
            case "4":
                input1.value += 4;
                break; 
            case "3":
                input1.value += 3;
                break; 
            case "2":
                input1.value += 2;
                break; 
            case "1":
                input1.value += 1;
                break;
            case "0":
                input1.value += 0;
                 break;
            case ".":
                if(input1.value == ""){
                    e.preventDefault();
                    return;
                }
                if( input1.value.includes("-") || input1.value.includes("+") || input1.value.includes("*") || input1.value.includes("/") ){
                    let pointCheck = input1.value.split(operadorActual);
                if(pointCheck[1].includes(".")){
                    e.preventDefault();
                    return;
                }
                }
                if(input1.value.includes(".")){
                    e.preventDefault();
                    return;
                }else{
                    input1.value += ".";
                }
                break;   
            case "/":
            case "+":
            case "*":
            case "-":
                if( input1.value.includes("-") || input1.value.includes("+") || input1.value.includes("*") || input1.value.includes("/") ){
                    e.preventDefault();
                    return;
                }
                if(input1.value == ""){
                    e.preventDefault();
                    return;
                }else{
                    switch(e.key){
                        case "/":
                            operadorActual = "/";
                            input1.value += "/";
                            break;
                        case "+":
                            operadorActual = "+";
                            input1.value += "+";
                            break;
                        case "-":
                            operadorActual = "-";
                            input1.value += "-";
                            break;
                        case "*":
                            operadorActual = "*";
                            input1.value += "*";
                            break;
                    }
                }
                break;
            case "Enter":
                if( input1.value.includes("-") || input1.value.includes("+") || input1.value.includes("*") || input1.value.includes("/") ){
                input1Arr = input1.value.split(operadorActual); 
                }else{
                    alert("Oops! Looks like you're missing a number or operator.");
                    return;
                }
                if(input1Arr[1] == ""){
                    alert("Oops! Looks like you're missing a number or operator.");
                    return;
                }
                operate(input1Arr, operadorActual);
                break;      
        }
    }
});