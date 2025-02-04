/*
Clase 27 - Maps
Vídeo: https://youtu.be/1glVfFxj8a4?t=10755
*/

// Map

// Declaración

let myMap = new Map()

console.log(myMap)

// Inicialiación

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

console.log(myMap)

// Métodos y propiedades

// set
// Si la clave no existe añade un nuevo valor, si la clave existe lo actualiza.
myMap.set("alias", "mouredev")
myMap.set("name", "Brais Moure")

console.log(myMap)

// get = Recupera el valor.

console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has = Comprobar si una clave existe.

console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// delete = eliminar por claves

myMap.delete("email")

console.log(myMap)

// keys, values y entries

console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries())

// size

console.log(myMap.size)

// clear

myMap.clear()

console.log(myMap)



