import app from "../src/app";
import request from "supertest";

describe("Index Routes", () => {
  it("should respond welcome", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ message: "welcome to my api" });
  });

  it("should respond pong", async () => {
    const res = await request(app).get("/ping");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ result: "pong" });
  });
});
