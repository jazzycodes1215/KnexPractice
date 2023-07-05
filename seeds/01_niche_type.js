/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE niche_type CASCADE')
  await knex('niche_type').del()
  await knex('niche_type').insert([
    {id: 1, name: 'Marketing', isDesirable: false},
    {id: 2, name: 'Consulting', isDesirable: false},
    {id: 3, name: 'Real Estate', isDesirable: true}
  ]);
};
