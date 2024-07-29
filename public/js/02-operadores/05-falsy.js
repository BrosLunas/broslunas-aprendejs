// --> Falso
// boolean: false
// 0
// ''
// null
// undefined
// NaN

// Ejemplo con OR = ||
let nombre = '';
let username = nombre || 'Username';
console.log(username);

// Ejemplo con AND = &&
function fn1() {
    console.log('soy función 1');
    return false;
}

function fn2() {
    console.log('soy función 2');
    return true;
}

let x = fn1() && fn2();