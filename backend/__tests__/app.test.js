import request from "supertest";
import app from "../app.js";
import db from "../db/connection.js";
import testData from "../db/data/test-data/index.js";
import seed from "../db/seeds/seed.js";

beforeEach(() => seed(testData));
afterAll(() => db.end());

describe("/api", () => {
  describe("GET", () => {
    test("200: responds with a JSON object containing all the available endpoints on the API", () => {
      return request(app)
        .get("/api")
        .expect(200)
        .then(({ body }) => {
          expect(body.endpoints).toBeInstanceOf(Array);
          expect(body.endpoints.length).toBeGreaterThan(0);
          body.endpoints.forEach((endpoint) => {
            expect(endpoint).toBeInstanceOf(Object);
            expect(endpoint).toHaveProperty("method");
            expect(endpoint).toHaveProperty("path");
            expect(endpoint).toHaveProperty("description");
          });
        });
    });
  });
});
