
let id = 1
function proximoId() {
    return id++
} 

const usuarios = [
    {
        id: proximoId(),
        nome: 'João Silva',
        email: 'joaosilva@email.com',
        idade: 29,
        perfil_id: 1,
        status: 'ATIVO'
    },
    {
        id: proximoId(),
        nome: 'Rafael Junior',
        email: 'rafaeljunior@email.com',
        idade: 31,
        perfil_id: 2,
        status: 'INATIVO'
    },
    {
        id: proximoId(),
        nome: 'Daniela Smith',
        email: 'danielsmith@email.com',
        idade: 24,
        perfil_id: 1,
        status: 'BLOQUEADO'
    }
]

const perfis = [
    { id: 1, nome: 'Comum' },
    { id: 2, nome: 'Administrador' }
]

module.exports = { usuarios, perfis, proximoId }