
let lado1,lado2,lado3,tipoTriangulo

console.log("Ingrese el primer lado:");
lado1 = parseInt(prompt("Ingrese el primer lado:"));
console.log("Ingrese el segundo lado:");
lado2 = parseInt(prompt("Ingrese el segundo lado:"));
console.log("Ingrese el tercer lado:");
lado3 = parseInt(prompt("Ingrese el tercer lado:"));

if (lado1 === lado2 && lado1 === lado3) {
  tipoTriangulo = "equilatero";
}
//aqui vemos si dos de sus lados son iguales para no condunfirme xd
else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
  tipoTriangulo = "isosceles";
}
// Si no se cumplen ninguna de las condiciones anteriores, el triángulo es escaleno
else {
  tipoTriangulo="escaleno";
}

console.log("El triángulo es:  " + tipoTriangulo);
alert("el triangulo es: "+tipoTriangulo)
