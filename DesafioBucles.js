
console.log();
console.log("1. Imprimir impares 1-20");
for(var i=1; i<=20; i++) {
    if (i % 2 !== 0) {
        console.log("Impar es : " + i);
    }
}


console.log();
console.log("2. Disminuir múltiplos de 3");
for(var i=100; i>=0; i--) {
    if (i % 3 == 0) {
        console.log("Divisible por 3 es : " + i);
    }
}


console.log();
console.log("3. Imprime la secuencia");
for(var i= -3.5; i<=4; i=i+0.5) {
    switch (i) {
        case 4:
            console.log("Secuencia a Imprimir : " + i);
            break;
        case -2.5:
            console.log("Secuencia a Imprimir : " + i);
            break;
        case 1:
            console.log("Secuencia a Imprimir : " + i);
            break;
        case -0.5:
            console.log("Secuencia a Imprimir : " + i);
            break;
        case -2:
            console.log("Secuencia a Imprimir : " + i);
            break;                                
        case -3.5:
            console.log("Secuencia a Imprimir : " + i);
            break;                                
        default:
            break;
        }
}



console.log();
console.log("4. Sigma");
let sum = 0;
let textoSigma=""
for(var i=1; i<=100; i++) {
    sum = sum + i;
    if (textoSigma=="") {
        textoSigma = i;
    } else {
        textoSigma=textoSigma + " + " + i;
    }
}
textoSigma = textoSigma + "."
console.log("La Suma Total es : " + sum);
console.log("Los numeros sumados fueron : " + textoSigma);




console.log();
console.log("5. Factorial");
let product = 1;
let textoFact="1";
let j=2;
while (j<=12) {
    product = product * j;
    textoFact=textoFact + " * " + j;
    j=j+1;
}
textoFact = textoFact + ".";
console.log("La Multiplicacion Total es : " + product);
console.log("Los numeros usados fueron : " + textoFact);

