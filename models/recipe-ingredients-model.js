const db = require("../data/db-config");

module.exports = {
    addIngredient,
    removeIngredient
}

// Receives an ingredient in 'text' format
// Looks up that ingredient in the 'ingredients db'
// returns by inserting a new object into the recipe ingredients table
function addIngredient(recipeId, req) {
    const { ingredient, quantity, measurement } = req;

    return db('ingredients')
        .where({ ingredient_name: ingredient })
        .first()
        .then(ingredient => {
           return db('recipe_ingredients')
            .insert({ 
                recipe_id: recipeId, 
                ingredient_id: ingredient.id, 
                quantity: quantity,
                measurement: measurement,
            })
        });
}

function removeIngredient(id) {
    return db('recipe_ingredients')
        .where({ id })
        .del()
}