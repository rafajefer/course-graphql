// const { perfis } = require('../data/db')
const db = require('../../config/db')

module.exports = {
    // salario(usuario) {
    //     return usuario.salario
    // },
    // perfil(usuario) {
    //     const sels = perfis
    //         .filter(p => p.id === usuario.perfil_id)
    //     return sels ? sels[0] : null
    // }
    async perfis(usuario) {
        const perfis = await db('perfis')
            .join('usuarios_perfis', 'perfis.id', 'usuarios_perfis.perfil_id')
            .where({ usuario_id: usuario.id })
        return perfis
    }
}