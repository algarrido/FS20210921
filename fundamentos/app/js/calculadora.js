
let calcScreen = document.querySelector(".calc-numbers");
let currentTotal = 0; 
let buffer = "0"; 
let previousOperator = null;

function handleSymbol(value){
    switch (value){
        case "C":
            buffer = "0";
            currentTotal = 0;
            previousOperator = null;
            break;
        case "=":
            if(previousOperator === null){ 
                return;
            
            }
            flushOperation(parseInt(buffer));
            buffer = "" + currentTotal;
            previousOperator = null;
            currentTotal = 0;
            break;
        case "←":
            if(buffer.length === 1){
                buffer = "0";
            }
            else{
                buffer = buffer.substring(0,buffer.length-1); 
            }
            break;
        default:
            handleMath(value);
            break;
    }
    return value;
}

function handleNumber(value){
    if(buffer === "0"){
        buffer = value;
    }else{
        buffer += value;
    }
}

function handleMath(value){
    const internalBuffer = parseInt(buffer);
    
    if (currentTotal === 0){
        currentTotal = internalBuffer;
    }else{
        flushOperation(internalBuffer);
    }

    previousOperator = value;

    buffer = "0";
}

function suma(internalBuffer, currentTotal1){
  currentTotal=currentTotal1;
  return currentTotal +=internalBuffer;
}

function resta(internalBuffer, currentTotal1) {
  currentTotal=currentTotal1;
  return currentTotal -= internalBuffer;;

}

function multiplica(internalBuffer, currentTotal1) {
  currentTotal=currentTotal1;
  return currentTotal *= internalBuffer;

}

function divide(internalBuffer, currentTotal1) {
  currentTotal=currentTotal1;
  
  return currentTotal /= internalBuffer;

}

function flushOperation(internalBuffer){
  if(previousOperator === "+"){
    suma(internalBuffer,currentTotal);
  }else if(previousOperator === "-"){
    resta(internalBuffer,currentTotal);
  }else if(previousOperator === "x"){
    multiplica(internalBuffer,currentTotal);
  }else{
    divide(internalBuffer,currentTotal);
  }
}

function rerenderScreen(){
  calcScreen.value = buffer;
}