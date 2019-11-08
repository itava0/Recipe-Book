const db = require("../data/db-config");

module.exports = {
    get,
    getInstructions,
    getIngredients,
    add,
    update,
    remove
}

function get(id) {
    return id
        ? db('recipes').where({ id }).first()
        : db('recipes');
}

function getInstructions(id) {
    return db('recipes as r')
        .join('instructions as i', 'r.id', 'i.recipe_id')
        .select('i.id as step_id', 'r.recipe_name as recipe', 'i.step_number', 'i.steps')
        .where({ recipe_id: id });
}

function getIngredients(id) {
    return db('recipes as r')
        .join("recipe_ingredients as ri", "r.id", "ri.recipe_id")
        .join("ingredients as i", "ri.ingredient_id", "i.id")
        .where({ recipe_id: id })
        .select("r.recipe_name as recipe", "ri.id as ingredient_id", "i.ingredient_name as ingredient", "ri.quantity", "ri.measurement")
}

function add(recipe) {
    return db('recipes')
        .insert(recipe)
        .then(([id]) => get(id));
}

function update(id, updatedRecipe) {
    return db('recipes')
        .where({ id })
        .update(updatedRecipe)
        .then(() => get(id));
}

function remove(id) {
    return db('recipes')
        .where({ id })
        .del();
}