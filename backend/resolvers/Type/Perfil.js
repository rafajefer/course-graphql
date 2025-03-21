const db = require('../../config/db')
const { usuarios } = require('../Query/Usuario')

module.exports = {
    usuarios(perfil) {
        return db('usuarios_perfis')
            .join('usuarios', 'usuarios.id', 'usuarios_perfis.usuario_id')
            .where({ perfil_id: perfil.id })
    }
}