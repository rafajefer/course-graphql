const db = require('../../config/db')
const { perfil: obterPerfil } = require('../Query/Perfil')

module.exports = {
    async novoPerfil(_, { dados }, contexto) {
        contexto && contexto.validarAdmin()
        try {
            // const perfilExistente = await db('perfis').where({ nome: dados.nome }).first()
            // if (perfilExistente) {
            //     throw new Error('Perfil já cadastrado')
            // }
            const [ id ] = await db('perfis').insert(dados)
            return db('perfis').where({ id }).first()
        } catch (e) {
            throw new Error(e.sqlMessage)
        }
    },
    async excluirPerfil (_, { filtro }, contexto) {
        contexto && contexto.validarAdmin()
        try {
            const perfil = await obterPerfil(_, { filtro })
            if (perfil) {
                await db('usuarios_perfis')
                    .where({ perfil_id: perfil.id }).delete()
                await db('perfis')
                    .where({ id: perfil.id }).delete()
            }
            return perfil
        } catch (e) {
            throw new Error(e.sqlMessage)
        }
    },
    async alterarPerfil(_, { filtro, dados }, contexto) {
        contexto && contexto.validarAdmin()
        try {
            const perfil = await obterPerfil(_, { filtro })
            if (perfil) {
                const { id } = perfil
                await db('perfis')
                    .where({ id }).update(dados)
            }
            return { ...perfil, ...dados }
        } catch (e) {
            throw new Error(e.sqlMessage)
        }
    }
}