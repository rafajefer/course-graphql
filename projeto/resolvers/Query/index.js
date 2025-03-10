const usuario = require('./Usuario')
const perfil = require('./Perfil')
const produto = require('./Produto')
const utils = require('./Utils')

module.exports = {
    ...usuario,
    ...perfil,
    ...produto,
    ...utils
}