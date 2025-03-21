const { tarefas } = require('../../data/db')
const { excluirPerfil } = require('./Perfil')


const indiceTarefa = filtro => {
    if (!filtro) return -1
    const { id, nome } = filtro
    if (id) {
        return tarefas.findIndex(p => p.id == id)
    }
    if (nome) {
        return tarefas.findIndex(p => p.nome === nome)
    }
    return -1
}

module.exports = {
    novaTarefa(_, { dados }) {
        const tarefaExistente = tarefas.some(t => t.nome === dados.nome)
        if (tarefaExistente) {
            throw new Error('Tarefa já cadastrada')
        }
        const nova = {
            id: tarefas.length + 1,
            ...dados,
            concluido: false
        }
        tarefas.push(nova)
        return nova
    },
    excluirTarefa(_, { filtro }) {
        const i = indiceTarefa(filtro)
        if (i < 0) return null
        const excluidos = tarefas.splice(i, 1)
        return excluidos ? excluidos[0] : null
    },
    alterarTarefa(_, { filtro, dados }) {
        const i = indiceTarefa(filtro)
        if (i < 0) return null
        const tarefa = {
            ...tarefas[i],
            ...dados
        }
        tarefas.splice(i, 1, tarefa)
        return tarefa
    },
    concluirTarefa(_, { filtro }) {
        const i = indiceTarefa(filtro)
        if (i < 0) return null
        tarefas[i].concluido = true
        const tarefa = {
            ...tarefas[i]
        }
        return tarefa
    }
}