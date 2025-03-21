
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

const tarefas = [
    { id: 1, nome: 'Estudar o curso de GraphQL', concluido: true },
    { id: 2, nome: 'Estudar o curso de React', concluido: false },
    { id: 3, nome: 'Estudar o curso de Node', concluido: false }
]

module.exports = { usuarios, perfis, tarefas, proximoId }