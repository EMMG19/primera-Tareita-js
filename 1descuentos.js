/*Un cliente ordena 4 libros, que a menudeo cuestan 568 $ cada uno, menos un descuento de 20%, 3 discos
de $45 cada uno, con un descuento de 15% y un tocadisco de $678 que no tiene descuento. Además, un
descuento del 2% sobre el pedido total si se paga pronto. Hacer un programa para calcular e imprimir, el total
de la compra, suponiendo pronto pago.*/

let precios = [568, 45, 678], total = 0

function calculadorDes(precio, cantidad, descuento){
    return (precios[precio] - ((precios[precio]*(descuento/100)))) * cantidad

}

total = calculadorDes(0,4,20) + calculadorDes(1,3,15) + calculadorDes(2,1,0)

console.log("\nEl total es " + total + "\n")
