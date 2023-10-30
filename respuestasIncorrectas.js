let respuestasC,respuestasI,respuestasB
//const prompt=require("prompt-sync")({sigint:true});

respuestasC=parseInt(prompt("escribe el numero de respuestas correctas: "));
respuestasI=parseInt(prompt("escribe el numero de respuestas incorrectas: "));
respuestasB=parseInt(prompt("escribe el numero de respuestas en blancp: "));

puntajeFinal = (respuestasC * 4) + (respuestasI -1) + (respuestasB * 0)
	console.log("el puntaje final del alumno es: "+puntajeFinal)
    alert("el puntaje final del alumno es: "+puntajeFinal)