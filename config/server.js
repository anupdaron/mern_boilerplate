const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const setRoutes = require("./routes");
const cors = require("cors");

server.use(cors());
server.use(bodyParser.json());

setRoutes(server);

module.exports = server;
