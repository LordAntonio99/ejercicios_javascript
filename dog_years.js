// Guardar nuestra edad en una variable
let myAge = 20;

// Los 2 primeros años de un perro equivalen a 10.5 años humanos
let earlyYears = 2;
earlyYears *= 10.5;

// A partir de estos años, nuestra conversión sera de un año humano por cada 4 años de perro
let laterYears = myAge - 2;

// Asignamos el valor total de la edad a la equivale el resto de nuestros años en forma de los de perro
laterYears *= 4;

// Almacenamos nuestra edad en años de perro
const myAgeInDogYears = earlyYears + laterYears;

// Creamos una variable con nuestro nombre, pero en minúsculas
const myName = "Antonio".toLowerCase();

// Finalmente concatenamos las variables con una frase
console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);