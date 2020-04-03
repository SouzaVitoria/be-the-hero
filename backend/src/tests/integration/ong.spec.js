const request = require("supertest");
const app = require("../../app");
const connection = require("../../database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      .set("Authorization", "asd")
      .send({
        name: "APAD2",
        email: "contato@asd.com",
        whatsapp: "9869029000",
        city: "Rio do Sul",
        uf: "SC"
      });
    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
