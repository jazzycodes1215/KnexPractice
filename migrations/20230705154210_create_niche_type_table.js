/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


exports.up = function(knex) {
  return knex.schema.createTable('niche_type', table => {
    table.increments('id');
    table.string('name', 250);
    table.boolean('isDesirable');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('niche_type');
};
