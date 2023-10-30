/*let nombres=["Emy","jose","luis","pedro",]

function recorridoNombres(){
    for(let i=0;i<nombres.length;i++){
        console.log("indice: ",i,"Nombres; ",nombres[i]);
    
    }
}
console.log(recorridoNombres())

//programa
/*crear un programa que contenga una funcion que permita calcular el promedio
 de un arreglo de 10 calificaciones y la suma total del promedio*/

let suma=0,promedio=0,calificaciones=[9,10,9,8,8,10,9,6,10,9]
 function promediador(){
    for(let i=0;i<calificaciones.length;i++){
        suma= suma+calificaciones[i]
    }
    console.log("\nel promedio del alumno es: "+suma/10, "\n")
    console.log("\nla suma total de las calificaciones es: "+suma,"\n")
 }
promediador()

