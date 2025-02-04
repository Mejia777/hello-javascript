/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let Arrayanimals = new Array();

Arrayanimals = new Array("Perro", "Gato", "Aguila", "Leon", "Delfin")
console.log(Arrayanimals);

// 2. Añade dos más. Uno al principio y otro al final
Arrayanimals.unshift("Ballena") //se le añade al principio.
Arrayanimals.push("Tigre") //se le añade al final.
console.log(Arrayanimals);
//Arrayanimals.shift(); elimina el primer elemento y lo devuelve

// 3. Elimina el que se encuentra en tercera posición
Arrayanimals.splice(2, 1); // 2 es el indice donde se comenzara a 
                            //eliminar y el 1 la cantidad que se desea eliminar apartir del indice.
console.log(Arrayanimals);

// 4. Crea un set que almacene cinco libros
let Setbooks = new Set(["Dune", "1984", "Los tres cuerpos", "Fahreheit 451", "El resplandor"])
console.log(Setbooks);

// 5. Añade dos más. Uno de ellos repetido
Setbooks.add("Los secretos",);
Setbooks.add("Los Tres cuerpos",); //No se pueden repetir elementos en esta estructura de datos.
console.log(Setbooks);

// 6. Elimina uno concreto a tu elección
Setbooks.delete("Dune");
console.log(Setbooks);

// 7. Crea un mapa que asocie el número del mes a su nombre

let myMap = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])

console.log(myMap);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log(myMap.get(5)); 

// 9. Añade al mapa una clave con un array que almacene los meses de verano 
let summerArray = new Array();
summerArray = new Array("Junio", "Julio", "Agosto");
myMap.set("Verano", summerArray);
console.log(myMap)
console.log(myMap.get("Verano"));

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let objetArray = new Array();
objetArray = new Array("iphone", "PC", "Book", "wallet", "glasses")
console.log(objetArray)
let objetSet = new Set(objetArray);
console.log(objetSet)
let objetMap = new Map([
    ["objects", objetSet]
])
console.log(objetMap)
console.log(objetMap.get("objects"));
