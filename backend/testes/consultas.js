const db = require('../config/db')


db('perfis').then(perfis => console.log(perfis))