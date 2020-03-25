const express = require("express");
const routes = express.Router();

routes.get("/users", (request, response) => {
  return response.json({
    evento: "Semana OmniStack 11.0",
    aluno: "Vitória Souza"
  });
});

module.exports = routes;
