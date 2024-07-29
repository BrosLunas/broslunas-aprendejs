// Creamos el parámetro 'a'
function sumar(a, b) {
    console.log(arguments); // Ver todos los argumentos
    return a + b;
}

let resultado = sumar(5, 4);
console.log(resultado);