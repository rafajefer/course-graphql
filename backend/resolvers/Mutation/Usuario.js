const bcrypt = require('bcrypt-nodejs')
const db = require('../../config/db')
const { perfil: obterPerfil } = require('../Query/Perfil')
const { usuario: obterUsuario} = require('../Query/Usuario')

const mutations = {
    registrarUsuario (_, { dados }) {
        return mutations.novoUsuario(_, {
            dados: {
                nome: dados.nome,
                email: dados.email,
                senha: dados.senha
            }
        })
    },
    async novoUsuario (_, { dados }, contexto) {
        contexto && contexto.validarAdmin()
        try {
            const idPerfis = []
            if (!dados.perfis || !dados.perfis.length) {
                dados.perfis = [
                    { nome: 'comum' }
                ]
            }
            for(let perfilFiltro of dados.perfis) {
                const perfil = await obterPerfil(_, {
                    filtro: { ...perfilFiltro }
                })
                if (perfil) {
                    idPerfis.push(perfil.id)
                }
            }

            const salt = bcrypt.genSaltSync()
            dados.senha = bcrypt.hashSync(dados.senha, salt)

            delete dados.perfis
            const [ id ] = await db('usuarios').insert(dados)
            for(perfil_id of idPerfis) {
                await db('usuarios_perfis').insert({ perfil_id, usuario_id: id })
            }
            return db('usuarios').where({ id }).first()
        } catch (e) {
            throw new Error(e)
        }
    },
    async excluirUsuario (_, args, contexto) {
        contexto && contexto.validarAdmin() 
        try {
            const usuario = await obterUsuario(_, args)
            if (usuario) {
                const { id } = usuario
                await db('usuarios_perfis').where({ usuario_id: id }).delete()
                await db('usuarios').where({ id }).delete()
            }
            return usuario
        } catch (e) {
            throw new Error(e.sqlMessage)
        }
    },
    async alterarUsuario(_, { filtro, dados }, contexto) {
        contexto && contexto.validarUsuarioFiltro(filtro)
        try {
            const usuario = await obterUsuario(_, { filtro })
            if (!usuario) {
                return null
            }
            const { id } = usuario
            if (context.admin && dados.perfis) {
                await db('usuarios_perfis').where({ usuario_id: id }).delete()
                for (let filtro of dados.perfis) {
                    const perfil = await obterPerfil(_, {
                        filtro
                    })
                    perfil && await db('usuarios_perfis').insert({
                        perfil_id: perfil.id,
                        usuario_id: id
                    })
                }
            }

            if (dados.senha) {
                const salt = bcrypt.genSaltSync()
                dados.senha = bcrypt.hashSync(dados.senha, salt)
            }
            delete dados.perfis
            await db('usuarios').where({ id }).update(dados)
            return { ...usuario, ...dados }
        } catch (e) {
            throw new Error(e.sqlMessage)
        }
    }
}
module.exports = mutations