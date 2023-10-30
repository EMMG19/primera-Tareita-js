let r,h,AreaTotal,Volumen
//const prompt=require("prompt-sync")({sigint:true});

r=parseInt(prompt("ingrese el radio del cilindro"))
h=parseInt(prompt("ingrese la altura del cilindro"))

areaBase=(3.1416*(r*r)*2)
areaLateral=2*3.1416*r*h
areaTotal=areaBase+areaLateral

Volumen=3.1416*(r*r)*h

console.log("El area del cilindro es "+areaTotal)
alert(("El area del cilindro es "+areaTotal))
console.log("El volumen del cilindro es "+Volumen)
alert(("El volumen del cilindro es "+Volumen))