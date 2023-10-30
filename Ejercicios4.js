//Codigo para calcular cuantas horas ha dormido una persona en su vida
const prompt=require("prompt-sync")({sigint:true});

let años=parseInt(prompt("ingrese cuantos años tiene: "));

horasDormidas=(años*365*8)

console.log("Usted ha dormido "+horasDormidas+ " horas en su vida")

//Nancy y sus calificaciones 

const calificaciones=[9.5, 6.8, 9.2, 8.8]

function Resultado(){
    for(let i=0; i<calificaciones.length;i++)
    suma=calificaciones.reduce((a,b)=>{return a+b})
    final=suma/4
console.log(final)

if(final<7){
    console.log("Estas reprobada")
}else if(final>=7){
console.log("Aprobaste")
}
}

console.log(Resultado())