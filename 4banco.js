/*Un banco paga intereses con tasa anual del 5% sobre cuentas menores que $200000 pesos. El 6% para
cuentas de $200 000 hasta $500 000, y el 7% para cuentas mayores a los $500 000. Hacer un programa para
calcular el interés de una cuenta, cuyo saldo se otorga como dato de entrada.*/

const prompt = require('prompt-sync')()

console.log("\n")
let saldo = parseInt(prompt("Dame el saldo de la cuenta: "))

if(saldo < 200000){
    console.log("Su interez anual es del 5%, que aplicado seria: " + (saldo*.05) + "\n")

}else if(saldo >= 200000 && saldo <= 500000){
    console.log("Su interez anual es del 6%, que aplicado seria: " + (saldo*.06) + "\n")

}else{
    console.log("Su interez anual es del 7%, que aplicado seria: " + (saldo*.07) + "\n")

}