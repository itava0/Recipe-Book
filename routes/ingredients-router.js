const router = require('express').Router();

const Ingredients = require("../models/ingredients-model");

// GET - all ingredients
router.get("/", (req, res) => {
    Ingredients.get()
    .then(ingredients => res.json(ingredients))
    .catch(err => res.status(500).json({ error: "Failed to get all ingredients." }))
});

// GET - a single ingredient
router.get("/:id", (req, res) => {
    Ingredients.get(req.params.id)
    .then(recipe => res.json(recipe))
    .catch(err => res.status(500).json({ error: "Failed to get ingredient." }))
});

// POST - add a new ingredient
router.post("/", (req, res) => {
    Ingredients.add(req.body)
    .then(newIngredient => res.status(201).json(newIngredient))
    .catch(err => res.status(500).json({ error: "Failed to add new ingredient." }))
});

// PUT - update an ingredient
router.put("/:id", (req, res) => {
    Ingredients.update(req.params.id, req.body)
    .then(updatedIngredient => res.status(201).json(updatedIngredient))
    .catch(err => res.status(500).json({ error: "Failed to update ingredient." }))
});

// DELETE - remove an ingredient
router.delete("/:id", (req, res) => {
    Ingredients.remove(req.params.id)
    .then(deleted => res.json(deleted))
    .catch(err => res.status(500).json({ error: "Failed to remove ingredient from database." }))
});

module.exports = router;