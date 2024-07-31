let user = {
    id: 1,
    name: 'Broslunas',
    edad: 25,
};

for (let propiedad in user) {
    console.log(propiedad, ': ', user[propiedad]);
}