import { describe, it, expect, beforeAll } from "vitest";
import { app } from "..";
import request from "supertest";
import { clearDB } from "./helpers/reset-db";

describe("sum endpoint", () => {
  beforeAll(async () => {
    await clearDB();
  });

  it("should sum two numbers", async () => {
    const res = await request(app).post("/sum").send({
      a: 1,
      b: 2,
    });
    console.log(res.error);
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      answer: 3,
      id: expect.any(Number),
    });
  });
});
