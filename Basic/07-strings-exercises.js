

// 1. Concatena dos cadenas de texto

let myName = "Samuel"
let greeting = "Hola, " + myName + "!"
console.log(greeting)

// 2. Muestra la longitud de una cadena de texto
console.log(greeting.length)

// 3. Muestra el primer y último carácter de un string
console.log(greeting[0])
console.log(greeting[12])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let message = `Hola, 
la musica
es maravillosa!`
console.log(message)

// 6. Interpola el valor de una variable en un string
let email = "mejiabsamuel777@gmail.com"
console.log(`Soy ${myName}! Mi email es ${email}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let text = "Be exalted now in the heaven"
console.log(text.replace(/\s+/g, "---"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(text.includes("heaven"))

// 9. Comprueba si dos strings son iguales
console.log(message === myName)

// 10. Comprueba si dos strings tienen la misma longitud
if (greeting.length == email.length){
    console.log("Son iguales")
} else {console.log("No son iguales")}