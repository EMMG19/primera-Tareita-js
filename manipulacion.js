//agregar datos al array
function arreglo(){
    const datos=[10,12,34,24];
    datos.push(23);
    datos.unshift(9);
    console.log(datos);
}

console.log(arreglo());

//eliminar valores

function arreglo2(){
    const datos=[10,12,34,24];
    datos.pop();
    datos.shift();
    console.log(datos);
}

console.log(arreglo2());

//utilizar una propiedad de slice

function arre(){
    const datos=[10,12,34,24];
    //datos.splice(-2,2);
    datos.splice(4,1,25,26,27);
    console.log(datos);
}

console.log(arre());

//eliminar con la opcion dalate array
function arre2(){
    const datos=[10,12,34,24];
    delete(datos[1]);
console.log(datos);
}
console.log(arre2())

//utiliza de la funcion filter

function arre3(){
    const datos=[10,12,34,24];
    const nombres=["Dany","jose","pedro"]
    const resultado=datos.filter(dat=>dat!==12)
    const result=nombres.filter(dat=>dat!=="Dany")
    console.log(result)

}
console.log(arre3())

//utiizando map

const listOrigin=[1,2,3,4,5,6]

const nuevaLista=listOrigin.map(function sumarValor(elementoAc){
    return elementoAc+10;
})

//Destructuracion 
function sumarValor(valor){
    return valor+10;
}

const nuevalist=listOrigin.map(sumarValor);
console.log(nuevalist)

const articulo=[
    {nombre:"refrescos",precio:20},
    {nombre:"galletas",precio:15},
    {nombre:"enlatados",precio:30}
]

function obtenerDatos({nombre,precio}){
    return ${nombre} ${precio};
}

const date=articulos.map(obtenerDatos);
console.log(date)