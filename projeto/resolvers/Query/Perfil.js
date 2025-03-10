const { perfis } = require('../../data/db')

module.exports = {
    perfis() {
        return perfis
    },
    perfil(_, { id }) {
        const selecionados = perfis.filter(p => p.id == id)
        return selecionados ? selecionados[0] : null
    }
}