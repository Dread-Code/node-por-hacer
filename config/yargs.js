const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcio de la tarea por hacer'

};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'

};

const argv = require('yargs')
    .command('crear', 'Crear un elelmento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado })
    .command('borrar', 'Elimina una tarea de la lista', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
};