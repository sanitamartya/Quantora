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
      id: expect.any(String),
      name: "example-job",
    });
  });

  test("assigns a unique identity to each job submission", async () => {
    const firstResponse = await request(app).post("/jobs").send({
      name: "first-job",
    });

    const secondResponse = await request(app).post("/jobs").send({
      name: "second-job",
    });

    expect(firstResponse.status).toBe(202);
    expect(secondResponse.status).toBe(202);

    expect(firstResponse.body.id).toEqual(expect.any(String));
    expect(secondResponse.body.id).toEqual(expect.any(String));

    expect(firstResponse.body.id).not.toBe(secondResponse.body.id);
  });

  test("rejects a job submission without a name", async () => {
    const response = await request(app).post("/jobs").send({});

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      error: "Job name must be a non-empty string",
    });
  });

  test("rejects a job submission with an invalid name type", async () => {
    const response = await request(app).post("/jobs").send({
      name: 123,
    });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      error: "Job name must be a non-empty string",
    });
  });

  test("rejects a job submission with a blank name", async () => {
    const response = await request(app).post("/jobs").send({
      name: "   ",
    });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      error: "Job name must be a non-empty string",
    });
  });
});
