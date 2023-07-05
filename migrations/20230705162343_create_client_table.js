/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('client', table => {
        table.increments('id');
        table.string('name', 250);
        table.integer('niche_type_id');
        table.integer('scope_type_id');
        table.foreign('niche_type_id').references('niche_type.id');
        table.foreign('scope_type_id').references('scope_type.id');
    })};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('client', table => {
        table.dropForeign('niche_type_id')
        table.dropForeign('scope_type_id')
    })
    .then(function() {
        return knex.schema.dropTableIfExists('client')
    });
};
