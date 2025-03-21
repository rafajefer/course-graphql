const db = require('../config/db')

async function salvarUsuario(nome, email, senha) {
    let usuario = await db('usuarios').where({ email }).first()

    if (!usuario) {
        let [id] = await db('usuarios').insert({ nome, email, senha })
        return await db('usuarios').where({ id }).first()
    }

    await db('usuarios').where({ email}).update({ nome, senha })
    return await db('usuarios').where({ email }).first()
}

async function salvarPerfil(nome, rotulo) {
    let perfil = await db('perfis').where({ nome }).first()

    if (!perfil) {
        let [id] = await db('perfis').insert({ nome, rotulo })
        return await db('perfis').where({ id }).first()
    }

    await db('perfis').where({ nome }).update({ rotulo })
    return await db('perfis').where({ nome }).first()
}

async function adicionarPerfis(usuario, ...perfis) {
    const usuario_id = usuario.id
    await db('usuarios_perfis').where({ usuario_id }).delete()

    for(perfil of perfis) {
        const perfil_id = perfil.id
        await db('usuarios_perfis').insert({ usuario_id, perfil_id })
    }
}

async function executar() {
    const usuario = await salvarUsuario('Ana', 'ana@empresa.com.br', '123456')
    const perfilA = await salvarPerfil('rh', 'Pessoal')
    const perfilB = await salvarPerfil('fin', 'Financeiro')

    console.log('usuario', usuario)
    console.log('perfilA', perfilA)
    console.log('perfilB', perfilB)

    await adicionarPerfis(usuario, perfilA, perfilB)


}

executar()
    .catch(err => console.log(err))
    .finally(() => db.destroy())
