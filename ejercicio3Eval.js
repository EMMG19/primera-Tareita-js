const prompt = require('prompt-sync')()
let num, mayor, numeros = []

for(let i = 0; i < 10; i++){
    num = parseInt(prompt("Numero: "))
    numeros.push(num);
    Math.max(num);

    if(i == 0){
        mayor = i

    }else if(num > numeros[mayor]){
        mayor = i

    }
}

console.log("El numero mayor es: " + numeros[mayor])

//suma de los arreglos

const ArregloA=[10,20,30,40,50,60,70,80]
const ArregloB=[5,15,25,35,45,55,65,75]
const ArregloC=[]

if(ArregloA.length===ArregloB.length){
    for(let i=0; i< ArregloA.length;i++){
        ArregloC[i]=ArregloA[i]+ArregloB[i]
    }
    console.log("la suma de los numeros es: "+ArregloC)
}