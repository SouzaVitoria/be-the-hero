const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const incidents = await connection("incidents").select("*");
    return response.json(incidents);
  },

  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await connection("incidents").insert({
      //[id] para sempre pegar o primeiro valor do array
      title,
      description,
      value,
      ong_id
    });

    return response.json({ id });
  }
};
