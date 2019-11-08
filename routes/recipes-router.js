const router = require('express').Router();

const RecipeNames = require("../models/recipes-model");
const Recipes = require("../models/recipe-ingredients-model");
const Instructions = require("../models/instructions-model");

// GET - all recipes
router.get("/", (req, res) => {
    RecipeNames.get()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(500).json({ error: "Failed to get all recipes." }))
});

// GET - a single recipe
router.get("/:id", (req, res) => {
    RecipeNames.get(req.params.id)
    .then(recipe => res.json(recipe))
    .catch(err => res.status(500).json({ error: "Failed to get recipe." }))
});

// GET - all instructions for a recipe
router.get("/:id/instructions", (req, res) => {
    RecipeNames.getInstructions(req.params.id)
    .then(instructions => res.json(instructions))
    .catch(err => res.status(500).json({ error: "Failed to get recipe instructions." }))
});

// GET - all ingredients for a recipe
router.get("/:id/ingredients", (req, res) => {
    RecipeNames.getIngredients(req.params.id)
    .then(ingredients => res.json(ingredients))
    .catch(err => res.status(500).json({ error: "Failed to get ingredients for that recipe." }))
})

// POST - add a new recipe
router.post("/", (req, res) => {
    RecipeNames.add(req.body)
    .then(newRecipe => res.status(201).json(newRecipe))
    .catch(err => res.status(500).json({ error: "Failed to add new recipe." }))

});

// POST - add a new step to a recipe
router.post("/:id/instructions", (req, res) => {
    Instructions.add({
        steps: req.body.steps,
        step_number: req.body.step_number,
        recipe_id: req.params.id
    })
    .then(newStep => res.status(201).json(newStep))
    .catch(err => res.status(500).json({ error: "Failed to add new step to recipe." }))
})

// POST - add a new ingredient to a recipe
router.post("/:id/ingredients", (req, res) => {
    Recipes.addIngredient(req.params.id, req.body)
    .then(newIngredient => res.status(201).json(newIngredient))
    .catch(err => res.status(500).json({ error: "Failed to add ingredient to recipe." }))
})

// PUT - update a recipe
router.put("/:id", (req, res) => {
    RecipeNames.update(req.params.id, req.body)
    .then(updatedRecipe => res.status(201).json(updatedRecipe))
    .catch(err => res.status(500).json({ error: "Failed to update recipe." }))
});

// DELETE - remove a recipe
router.delete("/:id", (req, res) => {
    RecipeNames.remove(req.params.id)
    .then(deleted => res.json(deleted))
    .catch(err => res.status(500).json({ error: "Failed to delete recipe." }))
});

// DELETE - remove an ingredient from a recipe
router.delete("/ingredients/:id", (req, res) => {
    console.log(req.params)
    Recipes.removeIngredient(req.params.id)
    .then(deleted => res.json(deleted))
    .catch(err => res.status(500).json({ error: "Failed to remove ingredient from recipe." }))
})


module.exports = router;