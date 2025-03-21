module.exports = {
    ola() {
        return 'Olá Mundo!'
    },
    horaAtual() {
        return new Date().toLocaleDateString( 'pt-BR', { timeZone: 'America/Sao_Paulo', hour: '2-digit', minute: '2-digit', second: '2-digit' })
    },
    numerosMegaSena() {
        // return [4, 8, 13, 27, 33, 54]
        const crescente = (a, b) => a - b
        return Array(6).fill(0)
            .map(() => parseInt(Math.random() * 60 + 1))
            .sort(crescente)
    }
}