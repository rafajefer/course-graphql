const { usuarios } = require('../../data/db')

module.exports = {
    usuarioLogado() {
        return {
            id: 1,
            nome: 'Ana da Web',
            email: 'anadaweb@email.com',
            idade: 23,
            salario_real: 1234.56,
            vip: true
        }
    },
    usuarios() {
        return usuarios
    },
    usuario(_, { id }) {
        const selecionados = usuarios.filter(u => u.id == id)
        return selecionados ? selecionados[0] : null
    }
}