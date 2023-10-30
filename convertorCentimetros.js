let c
//const prompt=require("prompt-sync")({sigint:true});
console.log("escribe la medida en centimetros: ");
c=parseInt(prompt("escribe la medida en centimetros: "));

pulgadas=(c/2.54);
Pies=(c/30.48);
metros=(c/100);

console.log("la medida en pulgadas es: "+pulgadas);
alert("la medida en pulgadas es: "+pulgadas)
console.log("la medida en pies es: "+Pies);
alert("la medida en pies es: "+Pies)
console.log("la medida en metros es: "+metros);
alert("la medida en metros es: "+metros);
