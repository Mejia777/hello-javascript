

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

 // 1. Crea un bucle que imprima los números del 1 al 20
 let numbersArray = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);

 for (let i = 0; i < numbersArray.length; i++){
     console.log(`Numero: ${numbersArray[i]}`)
 }
 
 for (let value of numbersArray){
     console.log(`Numero: ${value}`)
 }
 
  // 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
 let suma = 0;
 
 for (let i = 0; i <= 100; i++){
     suma += 1
     console.log(`El resultado es ${suma}`)
 }
 
  // 3. Crea un bucle que imprima todos los números pares entre 1 y 50
 let num = 0
 for (let i = 0; i <= 50; i++){
     num++
     if(num % 2 === 0){
         console.log(`${num} es par`)
     }
 }
 
 
  // 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
 let nameArray = ["Samuel", "David", "Tauren", "Camilo", "Lena"];
 
 for (let value of nameArray){
     console.log(value);
 }
 
  // 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
 let aString = "Hola, Me llamo Samuel!"
 
 for (let value of aString){
     console.log(value.match(/[aeiouáéíóúü]/gi))
 }
 
  // 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
 let producto = 1 // es el elemento neutro de la multiplicación
 for (let i = 0; i < numbersArray.length; i++){ 
     producto *= numbersArray[i] //en cada iteracion multiplico el valor actual de producto por el elemento actual del Array.
 }
 console.log(`El producto de todos los numeros es ${producto}`)
 
  // 7. Escribe un bucle que imprima la tabla de multiplicar del 5
 let i = 1;
 while (i <= 10){
     console.log(`5 * ${i} = ${5 * i}`)
     i++
 }
 
 
  // 8. Usa un bucle para invertir una cadena de texto
 let textInvertido = "";
 for (let value of aString){ // recorre la cadena
     textInvertido = value + textInvertido; // coloca cada letra al inicio de textInvertido
 }
 console.log(textInvertido);
 
  // 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
 
 let n = 10;
 let fibonacci = [0, 1]
 
 for (let i = 2; i < n; i++){
     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; // 1 + 0 = 1..... //formula f(n) = f(n -1) + f(n-2) posicion -1 posicion atrás + posicion -2 posiciones atrás
 }
 
 console.log(fibonacci);
 
  // 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
 let myNewnumberArray = [];
 for (let i = 0; i <= numbersArray.length; i++){
     if (numbersArray[i] > 10){
         myNewnumberArray.push(numbersArray[i])
     }
 }
 console.log(myNewnumberArray);
 
 