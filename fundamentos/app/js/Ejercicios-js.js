/** 
Crear una función que devuelva un numero aleatorio (Math.random()) dentro del rango dado. 
 */
function numAleatorio() {
    let min = 0;
    let max = 11;
    let num = Math.random() * (max - min);
    let numEntero= Math.round(num);
    alert("PRIMER EJERCICIO: -- Numero generado: " + numEntero);
    return numEntero;
}

/*
 Adivina el Número, generar un número entre el 0 y el 100, 
 introducir un número e informar si es igual, mayor o menor. 
 Hay un máximo de 10 intentos para encontrar el número que sea igual.* 
 */
function adivinaNum(min, max) {
    let num = Math.random() * (max - min) + min;
    let numEntero= Math.round(num);
    let intentos = 0;
    let respuesta = 0;
    alert("SEGUNDO EJERCICIO -- Numero generado: " + numEntero);
    while (intentos <= 10){ 
        respuesta = prompt("Introduce un numero para adivinar" + " llevas " +intentos + " intentos");
        if(numEntero==respuesta){
                alert("Acertaste!"); 
                intentos=11;
        }   
        else{
            if(respuesta > numEntero){
                   
                alert("El numero a acertar es menor");
                intentos++;
            }
            else{
                
                alert("el numero a acertar es mayor"); 
                intentos++;    
            }
        }
    }  

}

/**
 * Crear una función que devuelva un array con el numero de elementos 
 * indicado, inicializados al valor suministrado.
 */

function devolverArray(principio,fin){
    let elementos = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
    let eleSacados = elementos.slice(principio, fin);
    alert(eleSacados);
}

/**
 * Crear una función que devuelva un determinado número de números primos.
 */
function numerosPrimos(){

     let elementos = prompt("Introduce un numero para mostrar los primos anterior a este");
     let primos = [];     
     for(let candidato = 2; candidato <= elementos; candidato++) {
         let primo = true;
         for(let divisor=2; divisor < candidato; divisor++) {

            if(candidato%divisor === 0) {
                 primo = !primo;
                 break;
             }
         }
         if(primo) primos.push(candidato);
     }
     
    
    console.log(primos);
    alert(primos);
      
}

function validaDNI(){

}

