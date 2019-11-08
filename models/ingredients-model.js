const db = require("../data/db-config");

module.exports = {
    get,
    add,
    update,
    remove
}

function get(id) {
    return id
        ? db('ingredients').where({ id }).first()
        : db('ingredients');
}

function add(ingredient) {
    return db('ingredients')
        .insert(ingredient)
        .then(([id]) => get(id));
}

function update(id, updatedIngredient) {
    return db('ingredients')
        .where({ id })
        .update(updatedIngredient)
        .then(() => get(id));
}

function remove(id) {
    return db('ingredients')
        .where({ id })
        .del();
}