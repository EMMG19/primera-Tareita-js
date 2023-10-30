//para pedir datos a traves del teclado
//const prompt=require("prompt-sync")({sigint:true});

let  c1,c2,c3,c4,c5,promedio;
//c1=70
c1=parseInt(prompt("ingrese la calificacion 1: "));
c2=parseInt(prompt("ingrese la calificacion 2"));
c3=parseInt(prompt("ingrese la calificacion 3"));
c4=parseInt(prompt("ingrese la calificacion 4"));
c5=parseInt(prompt("ingrese la calificacion 5"));
promedio=(c1+c2+c3+c4+c5)/5;
if(promedio>=70 & promedio<80){
    console.log("alumnoregular: "+promedio);
    alert("alumnoregular: "+promedio);
}else if(promedio>=80 & promedio<90 ){
    console.log("alumno bueno: "+promedio);
}else if(promedio>=90 & promedio<100 ){
    console.log("el excelente: "+promedio);
    alert("el excelente: "+promedio);
}else{
    console.log("alumno deficiente: "+promedio)
    alert("alumno deficiente: "+promedio)
}