let numero = parseInt(prompt("Ingresa un numero"));
let divisible = "";

if (numero % 2 === 0) {
  divisible += "2 ";
}

if (numero % 3 === 0) {
  divisible += "3 ";
}

if (numero % 5 === 0) {
  divisible += "5 ";
}

if (numero % 7 === 0) {
  divisible+= "7 ";
}

if (divisible !== "") {
  document.write(numero + " es divisible por: " + divisible);
} else {
  document.write(numero + "no es divisible por 2, 3, 5 ni 7");
}