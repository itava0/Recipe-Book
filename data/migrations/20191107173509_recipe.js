exports.up = function(knex) {
  return knex.schema.createTable('recipes', t => {
      t.increments();
      t.string('recipe_name', 128)
        .unique()
        .notNullable();
  })
  .createTable('ingredients', t => {
      t.increments();
      t.string('ingredient_name', 128)
        .unique()
        .notNullable();
    })
    .createTable('instructions', t => {
      t.increments();
      t.string('steps', 256).notNullable();
      t.integer('step_number').notNullable();
      t.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
  })
  .createTable('recipe_ingredients', t => {
      t.increments();
      t.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      t.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      t.integer('quantity').notNullable();
      t.string('measurement').notNullable();
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('instructions')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};
