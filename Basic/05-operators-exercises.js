
// 1. Crea una variable para cada operación aritmética
let a = 7;

console.log(a + 10)
console.log(a - 10)
console.log(a * 10)
console.log(a / 10)
console.log(a % 10)
console.log(a ** 10)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let myVariable = 3;
myVariable += a
console.log(myVariable)
myVariable -= a
myVariable *= a
myVariable /= a
myVariable %= a
myVariable **= a

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

console.log(10 > 5)
console.log(20 < 100)
console.log(1 >= 1)
console.log(6 <= 6)
console.log(a === 7)


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(10 < 5)
console.log(20 > 100)
console.log(1 != 1)
console.log(a <= 6)
console.log(a !== 7)

// 5. Utiliza el operador lógico and
console.log(a > 10 && 5 < a)

// 6. Utiliza el operador lógico or
console.log(a > 10 || 5 < a)

// 7. Combina ambos operadores lógicos
console.log(a > 10 && 5 < a || a === 7)

// 8. Añade alguna negación
console.log(!(a > 10 && 5 < a))
console.log(!(a > 10 || 5 < a))

// 9. Utiliza el operador ternario

const isHot = true

isHot ? console.log("Esta Caliente") : console.log("Esta Frio")

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log((5 + 5 && 5 * 2) >= 10)