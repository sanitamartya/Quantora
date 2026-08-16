const request = require("supertest");

const app = require("../src/app");

describe("Job API", () => {
  test("accepts a job submission according to the API contract", async () => {
    const response = await request(app)
      .post("/jobs")
      .set("Content-Type", "application/json")
      .send({
        name: "example-job",
      });

    expect(response.status).toBe(202);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toEqual({
      name: "example-job",
    });
  });
});
