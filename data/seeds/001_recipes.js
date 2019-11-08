exports.seed = function(knex) {
  return knex('recipes').insert([
    { recipe_name: 'Turkey Sandwich' },
    { recipe_name: 'PB & J' },
    { recipe_name: 'Ultimate Sandwich' },
    { recipe_name: 'Grilled Chicken Sandwich' }
  ]);
};
