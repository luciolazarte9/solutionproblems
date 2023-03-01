let frase = prompt("Ingrese una frase").toLowerCase();
let vocales = "";

for (let i = 0; i < frase.length; i++) {
    let letra = frase[i];
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        vocales += letra + " ";
    }
}

if (vocales === "") {
    document.write("La frase no contiene vocales")
} else {
    document.write("Las vocales de la frase son " + vocales)
}