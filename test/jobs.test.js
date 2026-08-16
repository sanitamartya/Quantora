const request = require("supertest");

const app = require("../src/app");

describe("Job API", () => {
  test("accepts a job submission", async () => {
    const response = await request(app).post("/jobs").send({
      name: "example-job",
    });

    expect(response.status).toBe(202);
    expect(response.body).toEqual({
      name: "example-job",
    });
  });
});
