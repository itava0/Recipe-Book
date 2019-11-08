const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const recipesRouter = require("./routes/recipes-router");
const ingredientsRouter = require("./routes/ingredients-router");
const instructionsRouter = require("./routes/instructions-router");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

server.use("/api/recipes", recipesRouter);
server.use("/api/ingredients", ingredientsRouter);
server.use("/api/instructions", instructionsRouter);

server.get("/", (req, res) => res.send("I have no idea what is going on."));

module.exports = server;