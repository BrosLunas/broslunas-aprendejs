// Personaje Minecraft
let nombre = "Steave";
let juego = "Minecraft";
let edad = 21;

// Juntar variables
let personaje = {
    nombre,
    juego: "Fortnite", // Cambiar el valor
    edad,
};

console.log(personaje); // Ver todos los valores
console.log(personaje.nombre); // Ver el valor seleccionado

personaje.juego = "Call of Duty"; // Cambiar valor

console.log(personaje.juego); // Ver el nuevo valor

delete personaje.juego; // Eliminar la variable

console.log(personaje); // Verificar si la variable está eliminada