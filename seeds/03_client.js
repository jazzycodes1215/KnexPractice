/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('client').del()
  await knex('client').insert([
    {id: 1, name: 'Luci', niche_type_id: 1, scope_type_id: 1},
    {id: 2, name: 'Michael', niche_type_id: 2, scope_type_id: 1},
    {id: 3, name: 'Pat', niche_type_id: 1, scope_type_id: 1}
  ]);
};
