// const { usuarios } = require('../../data/db')
const db = require('../../config/db')
const bcrypt = require('bcrypt-nodejs')
const { getUsuarioLogado } = require('../Comum/Usuario')

module.exports = {
    async login(_, { dados }) {
        const usuario = await db('usuarios')
            .where({ email: dados.email })
            .first()

        if (!usuario) {
            throw new Error('Usuário/Senha inválidos')
        }

        const saoIguais = bcrypt.compareSync(dados.senha, usuario.senha)
        if (!saoIguais) {
            throw new Error('Usuário/Senha inválidos')
        }

        return getUsuarioLogado(usuario)
    },
    usuarios(_, args, context) {
        context && context.validarAdmin()
        return db('usuarios')
    },
    usuario(_, { filtro }, context) {
        context && context.validarUsuarioFiltro(filtro)

        if (!filtro) return null
        const { id, email } = filtro
        if (id) {
            return db('usuarios').where({ id }).first()
        }
        if (email) {
            return db('usuarios').where({ email }).first()
        }
        return null
    }
}