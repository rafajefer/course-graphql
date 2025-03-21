/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('usuarios', table => {
        table.increments('id').primary()
        table.string('nome').notNull()
        table.string('email').notNull().unique()
        table.string('senha', 60).notNull()
        table.boolean('ativo').notNull().defaultTo(true)
        table.timestamp('data_criacao').defaultTo(knex.fn.now())
    }).then(function () {
        return knex('usuarios').insert([
            { nome: 'Rafael Jeferson Pena', email: 'rafa.jefer@gmail.com', senha: '12345678' },
            { nome: 'Jaime Lannister', email: 'jlann@empresa.com.br', senha: '12345678' },
            { nome: 'Gabriela T. Nunes', email: 'gtnunes@empresa.com.br', senha: '12345678' },
        ])
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('usuarios')
};
