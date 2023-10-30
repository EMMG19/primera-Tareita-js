// Declaramos las variables
var numero1 = 0;
var numero2 = 0;
var esDivisible = false;


console.log("Ingrese el primer número:");
numero1 = parseInt(prompt("Ingrese el primer número:"));
console.log("Ingrese el segundo número:");
numero2 = parseInt(prompt("Ingrese el segundo número:"));

// aqui comprobe si la division es 0
if (numero1 % numero2 === 0) {
  esDivisible = true;
}


console.log("El número " + numero1 + " es divisible por " + numero2 + " " + esDivisible);
alert("El número " + numero1 + " es divisible por " + numero2 + " " + esDivisible);
