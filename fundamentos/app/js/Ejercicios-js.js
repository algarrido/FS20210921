/** 
Crear una función que devuelva un numero aleatorio (Math.random()) dentro del rango dado. 
 */
/*function numAleatorio() {
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
/*
function adivinaNum(min, max, respuesta) {
    let a = new Aleatorio(min,max,respuesta);
    let intentos = 0;
    this.respuesta = respuesta;
    
    while (intentos <= 10){ 
        
        if(this.respuesta >= 1 || this.respuesta <= 100){
        if(this.numEntero == this.respuesta){
               //acertaste
                break;
                }   
                else{
                    if(respuesta > this.numEntero){
                        
                        intentos++;
                    }
                    else{
                        
                        
                        intentos++;    
                    }
                }
            }else{
                 intentos++; 
            }
        
    }
    return this.numEntero;  

}
*/
/**
 * Crear una función que devuelva un array con el numero de elementos 
 * indicado, inicializados al valor suministrado.
 */
/*
function devolverArray(principio,fin){
    let elementos = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
    let eleSacados = elementos.slice(principio, fin);
    alert(eleSacados);
    return elementos;
}
*/
/**
 * Crear una función que devuelva un determinado número de números primos.
 */
/*function numerosPrimos(){

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
    return primos;
      
}*/
/**
 * Crear una función que valide un NIF
 */
/*function validaDNI(dni){
    let numero, letr, letra;
    let expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;
    
    dni = dni.toUpperCase();
    
    if(expresion_regular_dni.test(dni) === true){
        numero = dni.substr(0,dni.length-1);
        numero = numero.replace('X', 0);
        numero = numero.replace('Y', 1);
        numero = numero.replace('Z', 2);
        letr = dni.substr(dni.length-1, 1);
        numero = numero % 23;
        letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
        letra = letra.substring(numero, numero+1);
        if (letra != letr) {
            alert('Dni erroneo, la letra del NIF no se corresponde');
            return false;
        }else{
            alert('Dni correcto');
            return true;
        }
    }else{
            alert('Dni erroneo, formato no válido');
            return false;
        }
}
*/
/**
 * Definir una función que determine si la cadena de texto que se
 * le pasa como parámetro es un palíndromo, es decir, si se lee de 
 * la misma forma desde la izquierda y desde la derecha. 
 * Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".
 */
/*
function palindromo(str) {
    const strReversed = str.split("").reverse().join("")
  
    if (strReversed === str)  {
        return true;
    }else{
        return false;
    }    
}*/
/*
class Aleatorio {
    
    constructor(min, max, respuesta) {
        this.min = min;
        this.max = max;
        this.respuesta = respuesta;
        this.num = Math.random() * (max - min);
        this.numEntero = Math.round(this.num);
        this.intentos = 0;
    }

    set cambiarNumeroGenerado(gener){
        this.numEntero = gener;
    }

    set cambiarRespuesta(res){
        this.respuesta = res;      
    }
    
    get mostrarNumeroGenerado() { 
        return this.numEntero; 
    }
    get mostrarRespuesta(){
        return this.respuesta;
    }
    
   
}*/
