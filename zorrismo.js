let puta,zorra
const prompt=require("prompt-sync")({sigint:true});
puta=parseInt(prompt("ingresa tu nivel de puta"))
zorra=parseInt(prompt("ingresa tu nivel de zorra"))
zorrismo=(puta+zorra)
if(zorrismo<=50){
    console.log("eres una zorra baby")

}else if(zorrismo>50 & zorrismo<80){
    console.log("eres una zorra")
}else if(zorrismo>80){
    console.log("eres una mega zorra")
}
console.log("tu nivel de zorrismo es: "+zorrismo)