const request = require("supertest");

const app = require("../src/app");

describe("Application", () => {
  test("can be loaded", () => {
    expect(app).toBeDefined();
  });

  test("returns 404 for an unknown route", async () => {
    const response = await request(app).get("/unknown");

    expect(response.status).toBe(404);
  });
});
