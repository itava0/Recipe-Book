const db = require("../data/db-config");

module.exports = {
    get,
    add,
    update,
    remove
}

function get(id){
    return id
        ? db('instructions').where({ id }).first()
        : db('instructions');
}

function add(instructions) {
    return db('instructions')
        .insert(instructions)
        .then(([id]) => get(id))
}

function update(id, instructions) {
    return db('instructions')
        .where({ id })
        .update(instructions)
        .then(() => get(id));
}

function remove(id) {
    return db('instructions')
        .where({ id })
        .del();
}