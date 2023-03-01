let numero1 = parseInt(prompt("Ingrese un numero"));
let numero2 = parseInt(prompt("Ingrese otro numero"));

if (numero1 > numero2) {
    document.write("El numero " + numero1 + " es mayor");
} else if (numero2 > numero1) {
    document.write("El numero " + numero2 + " es mayor");
} else {
    document.write("Son iguales");
}