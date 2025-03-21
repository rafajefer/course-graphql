const usuario = require('./Usuario')
const perfil = require('./Perfil')
const produto = require('./Produto')
const tarefa = require('./Tarefa')
const utils = require('./Utils')

module.exports = {
    ...usuario,
    ...perfil,
    ...produto,
    ...tarefa,
    ...utils
}