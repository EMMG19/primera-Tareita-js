
let nombreEquipo,partidosGanados,partidosEmpatados,partidosPerdidos,puntajeFinal
//const prompt=require("prompt-sync")({sigint:true});
// Solicitamos al usuario el nombre del equipo
console.log("Ingrese el nombre del equipo:");
nombreEquipo =parseInt(prompt("Ingrese el nombre del equipo:"));

// Solicitamos al usuario los partidos ganados, perdidos y empatados
console.log("Ingrese los partidos ganados:");
partidosGanados = parseInt(prompt("Ingrese los partidos ganados:"));
console.log("Ingrese los partidos perdidos:");
partidosPerdidos = parseInt(prompt("ingrese los partidos perdidos: "));
console.log("Ingrese los partidos empatados:");
partidosEmpatados = parseInt(prompt("Ingrese los partidos empatados:"));

puntajeFinal = (partidosGanados * 3 + partidosEmpatados);
console.log("El puntaje final del equipo " + nombreEquipo + " es de " + puntajeFinal);
alert("El puntaje final del equipo " + nombreEquipo + " es de " + puntajeFinal);