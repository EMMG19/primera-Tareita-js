// ejercicio 1
const A = [15, 20, 13, 23, 27, 10];

A.sort((a, b) => a - b);

console.log(A);

// ejercicio 2
const prompt=require("prompt-sync")({sigint:true})
const num=[0,1,2,3,4,5,6,7,8,9]
N=parseInt(prompt("Ingrese el numero para comprobar si existe: "))
function Existir(){
    if(num.includes(N)){
        console.log("El numero existe")
    }else{
        console.log("El numero no existe")
    }
}
console.log(Existir())


// ejercio 4
const ArregloA=[10,20,30,40,50,60,70,80]
const ArregloB=[5,15,25,35,45,55,65,75]
const ArregloC=[]

if(ArregloA.length===ArregloB.length){
    for(let i=0; i< ArregloA.length;i++){
        ArregloC[i]=ArregloA[i]+ArregloB[i]
    }
    console.log("la suma de los numeros es: "+ArregloC)
}

// ejercicio 5
const personas = [
    { nombre: "Emily", edad: 20 },
    { nombre: "Olivia", edad: 48 },
    { nombre: "Henry", edad: 11 },
    { nombre: "Edis", edad: 50 },
  ];
  
  let personaMayor = personas[0];
  
  for (const persona of personas) {
    
    if (persona.edad > personaMayor.edad) {
      
      personaMayor = persona;
    }
  }
  console.log(personaMayor.nombre);
  
  