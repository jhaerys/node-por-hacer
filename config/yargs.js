const descripcion = {
    demand: "true",
    alias: "d",
    desc: "descripcion de la tarea",
};

const completado = {
    demand: true,
    alias: "c",
    desc: "marca como completada la tarea",
};

const argv = require("yargs")
    .command("crear", "crea una tarea", {
        descripcion,
    })
    .command("borrar", "borra una tarea", {
        descripcion,
    })
    .command("actualizar", "actualzia el estado de una tarea", {
        descripcion,
        completado,
    })
    .help().argv;

module.exports = {
    argv,
};