const router = require('express').Router();

const Instructions = require("../models/instructions-model");

// GET - all instructions 
router.get("/", (req, res) => {
    Instructions.get()
    .then(instructions => res.json(instructions))
    .catch(err => res.status(500).json({ error: "Failed to get all instructions." }))
})

// GET - a single instruction
router.get("/:id", (req, res) => {
    Instructions.get(req.params.id)
    .then(instruction => res.json(instruction))
    .catch(err => res.status(500).json({ error: "Failed to get instruction." }))
})

// PUT - update an instruction
router.put("/:id", (req, res) => {
    Instructions.update(req.params.id, req.body)
    .then(updatedInstruction => res.status(201).json(updatedInstruction))
    .catch(err => res.status(500).json({ error: "Failed to update instruction." }))
})

// DELETE - remove an instruction
router.delete("/:id", (req, res) => {
    Instructions.remove(req.params.id)
    .then(deleted => res.json(deleted))
    .catch(err => res.status(500).json({ error: "Failed to remove instruction." }))
})

module.exports = router;