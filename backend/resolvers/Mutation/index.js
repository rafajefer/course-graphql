const usuario = require('./Usuario')
const perfil = require('./Perfil')
const tarefa = require('./Tarefa')

module.exports = {
    ...usuario,
    ...perfil,
    ...tarefa
}