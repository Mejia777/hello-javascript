

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "Samuel"

if (myName == "Samuel"){
    console.log("Samuel")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let userName = "Mejia777"
let password = "12345678"

if(userName == "Mejia777" && password == "12345678") {
    console.log("Sesion Iniciada")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = 100;

if (number > 0){
    console.log("El numero es positivo")
} else if (number < 0){
    console.log("el numero es negativo")
}else {
    console.log("El numero es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 16;

if (age >= 18){
    console.log("Puede votar.")
}else {
    let remainingAge = 18 - age;
    console.log(`Faltan ${remainingAge} años para poder votar!`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

const message = age >= 18 ? "Adulto" : "Menor"
console.log(message);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let month = "marzo"
let season;
if (month === "enero" || month === "diciembre" || month === "febrero"){
    season = "invierno";
    console.log(`Estamos en ${season}!`);
} else if (month === "marzo" || month === "abril" || month === "mayo"){
    season = "primavera";
    console.log(`Estamos en ${season}!`);
}else if (month === "junio" || month === "julio" || month === "agosto"){
    season = "verano"
    console.log(`Estamos en ${season}!`);
}else if (month === "septiembre" || month === "octubre" || month === "noviembre"){
    season = "otoño"
    console.log(`Estamos en ${season}!`);
}else{
    console.log("Ingrese un mes del año!")
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let monthDay;

if (month === "enero" || month === "marzo" || month === "mayo" || month === "julio" || month === "agosto" || month === "octubre" || month === "diciembre"){
    monthDay = 31
    console.log(`${month} tiene ${monthDay} días`)
}else if (month === "abril" || month === "junio" || month === "septiembre" || month === "noviembre"){
    monthDay = 30
    console.log(`${month} tiene ${monthDay} días`)
}else if (month === "febrero"){
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        monthDay = 29;
    } else {
        monthDay = 28;
    }
    console.log(`${month} tiene ${monthDay} días`);
}else {
    console.log("Ingrese un mes!")
}


// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
 let grettingMessage;
 let language = "Italiano"

 switch (language){
    case "Ingles":
        grettingMessage = "Hi, how are you?"
    break;
    case "Italiano":
        grettingMessage = "Ciao, come stai?"
    break;
    case "Frances":
        grettingMessage = "Bonjour, comment allez-vous?"
    break;
    case "Español":
        grettingMessage = "Hola, como estas?"
    break;
    default:
        grettingMessage = "Ingresa un idioma"
 }
 console.log(grettingMessage);

// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mes = "junio";
let seasons;

switch (mes){
    case "diciembre":
    case "enero":
    case "febrero":
        seasons = "Invierno"
    break;
    case "marzo":
    case "abril":
    case "mayo":
        seasons = "Primavera"
    break;
    case "junio":
    case "julio":
    case "agosto":
        seasons = "Verano"
    break;
    case "septiembre":
    case "octubre":
    case "noviembre":
        seasons = "Otoño"
    break;
    default :
    seasons = "Mes no válido"
}
console.log(`Estamos en ${seasons}!`)

// 10. Usa un switch para hacer de nuevo el ejercicio 7
let dayNumber;
switch (mes){
    case "enero":
    case "marzo": 
    case "mayo": 
    case "julio": 
    case "agosto":
    case "octubre": 
    case "diciembre":
        dayNumber = 31
    break;
    case "abril": 
    case "junio": 
    case "septiembre": 
    case "noviembre":
        dayNumber = 30
    break;
    case "febrero":
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            dayNumber = 29;
        } else {
            dayNumber = 28;
        }
    break;
    default:
        dayNumber = "No existe ningun mes con este numero de días"
}
console.log(`${mes} tiene ${dayNumber} días`)
