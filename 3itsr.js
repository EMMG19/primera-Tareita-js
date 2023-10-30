/*El ITSR diseñó un plan para medir el índice de contaminación tal que 37 es aceptable, de 38 a 55 es
desagradable, y arriba de 55 es peligroso. Hacer un programa que lea el índice de contaminación de la ciudad,
y que imprima el mensaje correspondiente en función del índice.*/

const prompt = require('prompt-sync')()

console.log("\n")
let contaminacion = parseInt(prompt("Dame la contaminacion de la ciudad (1-100): "))

if(contaminacion <= 37){
    console.log("La contaminacion es aceptable")

}else if(contaminacion >= 38 && contaminacion <= 55){
    console.log("La contaminacion es desagradable")

}else{
    console.log("La contaminacion es peligrosa")

}
