let action = 'listar';

switch (action) {
    case 'listar': // Si action tiene el valor de listar
        console.log('Acción de listar');
        break;
    case 'guardar': // Si action tiene el valor de guardar
        console.log('Acción de guardar');
        break;
    default: // Si action tiene cualquier otro valor
        console.log('Acción desconocida');
        break;
}