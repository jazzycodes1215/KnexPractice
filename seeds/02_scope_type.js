/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE scope_type CASCADE')
  await knex('scope_type').del()
  await knex('scope_type').insert([
    {id: 1, size: 'small' },
    {id: 2, size: 'medium' },
    {id: 3, size: 'large' }
  ]);
};
