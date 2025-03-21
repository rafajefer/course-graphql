const { tarefas } = require('../../data/db')

module.exports = {
    tarefas() {
        return tarefas
    },
    tarefa(_, { filtro }) {
        if (!filtro) return null
        const { id, nome } = filtro
        if (id) {
            return tarefas
                .filter(t => t.id === id)[0]
        }
        if (nome) {
            return tarefas
                .filter(t => t.nome === nome)[0]
        }
        return null
    }
}