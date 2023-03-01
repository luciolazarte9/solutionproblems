let num1 = parseInt(prompt("Ingrese el primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
let num3 = parseInt(prompt("Ingrese el ultimo numero"));

if (num1 > num2 && num3) {
    document.write("El numero " + num1 + " es el mayor");
} else if (num2 > num1 && num3) {
    document.write("El numero " + num2 + " es el mayor");
} else if (num3 > num1 && num2) {
    document.write("El numero " + num3 + " es el mayor");
} else {
    document.write("Son iguales");
}