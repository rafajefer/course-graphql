const db = require('../config/db')

const novoPerfil = {
    nome: 'visitante23',
    rotulo: 'Visitante23'
}

// db('perfis').insert(novoPerfil)
//     .then(res => console.log(res))
//     .catch(err => console.log(err.sqlMessage))

db.insert(novoPerfil).into('perfis')
    .then(res => console.log(res))
    .catch(err => console.log(err.sqlMessage))