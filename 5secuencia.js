/*Leer una secuencia de 20 números, almacenarlos en un arreglo y mostrar la posición donde se
encuentra el mayor valor leído.*/

const prompt = require('prompt-sync')()
let num, mayor, numeros = []

for(let i = 0; i < 20; i++){
    num = parseInt(prompt("Numero: "))
    numeros.push(num)

    if(i == 0){
        mayor = i
m
    }else if(num > numeros[mayor]){
        mayor = i

    }
}

console.log("El numero mayor es: " + numeros[mayor])