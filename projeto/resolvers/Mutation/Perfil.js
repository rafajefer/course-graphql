const { perfis } = require('../../data/db')

const indicePerfil = filtro => {
    if (!filtro) return -1
    const { id, nome } = filtro
    if (id) {
        return perfis.findIndex(p => p.id == id)
    }
    if (nome) {
        return perfis.findIndex(p => p.nome === nome)
    }
    return -1
}

module.exports = {
    novoPerfil(_, { dados }) {
        const perfilExistente = perfis.some(p => p.nome === dados.nome)
        if (perfilExistente) {
            throw new Error('Perfil já cadastrado')
        }
        const novo = {
            id: perfis.length + 1,
            ...dados
        }
        perfis.push(novo)
        return novo
    },
    excluirPerfil (_, { filtro }) {
        const i = indicePerfil(filtro)
        if (i < 0) return null
        const excluidos = perfis.splice(i, 1)
        return excluidos ? excluidos[0] : null
    },
    alterarPerfil(_, { filtro, dados }) {
        const i = indicePerfil(filtro)
        if (i < 0) return null
        const perfilExistente = perfis[i].nome === dados.nome && perfis[i].id !== filtro.id
        if (perfilExistente) {
            throw new Error('Perfil já cadastrado')
        }
        const perfil = {
            ...perfis[i],
            ...dados
        }
        perfis.splice(i, 1, perfil)
        return perfil
    }
}