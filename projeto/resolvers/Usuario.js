const { perfis } = require('../data/db')

module.exports = {
    salario(usuario) {
        return usuario.salario
    },
    perfil(usuario) {
        const sels = perfis
            .filter(p => p.id === usuario.perfil_id)
        return sels ? sels[0] : null
    }
}