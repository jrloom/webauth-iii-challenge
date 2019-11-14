const express = require("express");

const apiRouter = require("./routes/api");
const middelware = require("./middleware/global");

const server = express();

middelware(server);

server.use("/api", apiRouter);

module.exports = server;
