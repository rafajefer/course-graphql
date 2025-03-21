const db = require('../../config/db')

module.exports = {
    async perfis(_, args, context) {
        context && context.validarAdmin()
        return await db('perfis')
    },
    perfil(_, { filtro }, context) {
        context && context.validarAdmin()
        
        if (!filtro) return null
        const { id, nome } = filtro
        if (id) {
            return db('perfis').where({ id }).first()
        }
        if (nome) {
            return db('perfis').where({ nome }).first()
        }
        return null
    }
}