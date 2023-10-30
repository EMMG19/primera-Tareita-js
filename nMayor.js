let n1,n2;
//const prompt=require("prompt-sync")({sigint:true});
n1=parseInt(prompt("ingrese el numero 1: "));
n2=parseInt(prompt("ingrese el numero 2"));

if(n1>n2){
    console.log("El numero mayor es: "+n1);
    alert("El numero mayor es: "+n1);
}else if(n2>n1){
    console.log("El numero mayor es: "+n2);
    alert("El numero mayor es: "+n2)
}