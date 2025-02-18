/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function mySuma (a = 0, b = 0){
    return a + b;
}
let result = mySuma(20, 30);
console.log(result)

function suma(a= 0, b = 0){
    console.log(a + b)
}

suma(20, 30)


// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
let numbersArray = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);

function numMayor (array){
    let numberMayor = 0;
    for (let i = 0; i < array.length; i++){
        if( array[i] > numberMayor){
            numberMayor = array[i]
        }
    }
    return numberMayor;
}
console.log(numMayor(numbersArray));

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

let aString = "Hola, Me llamo Samuel!"

function contarVocales (string){
    let contador = 0;
    for (let value of string){
        if (value.match(/[aeiouáéíóúü]/gi)){
            contador++
        }
    }
    return contador;
}

console.log(contarVocales(aString)); 

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
let Arrayanimals = new Array("Perro", "Gato", "Aguila", "Leon", "Delfin")
function stringMayus(array) {
    let transforMayus = [];
    for (let i = 0; i < array.length; i++) {
        transforMayus.push(array[i].toUpperCase());
    }
    return transforMayus;
    
}
let nuevoArray = stringMayus(Arrayanimals);
console.log(nuevoArray);

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function numeroPrimo(num){
   let esPrimo = true;
   for (let i = 2; i < num; i++){

    if (num % i === 0){
        esPrimo = false;
        break;
    }

   }

   return esPrimo;
}

let answer = numeroPrimo(29);
console.log(answer);

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

let array1 = [1, 2, 3, 4, 5, 6, 7, 8];
let array2 = [2, 4, 6, 20, 8, 10, 15, 22];

function newArrayElement(lista1, lista2) {
    let newElemets = [];
    for (let value of lista1){
        // verifico si la el array2 incluye valores del 1.
        if (lista2.includes(value)){
            newElemets.push(value);
        }
    }
    return newElemets;
}
console.log(newArrayElement(array1, array2));



// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado