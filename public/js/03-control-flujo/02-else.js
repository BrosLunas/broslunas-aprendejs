// Reutilizamos el código de If

// Ejercicio 1 Else
let edad = 15;

if (edad >= 18) { // Si edad es igual o mayor que 18
    console.log("Eres mayor de edad ✅");
} else { // Si edad es menor a 18
    console.log("Eres menor de edad ❌");
}

// Ejercicio 2 Else if
if (edad >= 18) { // Si edad es igual o mayor que 18
    console.log("Eres mayor de edad ✅");
} else if (edad >= 13){ // Si edad es menor a 18 y mayor o igual a 13
    console.log("Eres menor de edad. Necesitas a un mayor de edad ⚠️");
} else { // Si edad es menor a 13
    console.log("Tienes menos de 13 años ❌");
}