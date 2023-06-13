import { createApp } from "./app";
import request from "supertest";
import { DatabaseSchema } from "./models/DatabaseSchema";
import Memory from "lowdb/adapters/Memory";
import lowdb from "lowdb";
import { Express } from "express";
import dbData from "./fixtures/db.json";

describe("/api/memes", () => {
  let app: Express;

  beforeEach(() => {
    // Crea un espacio en memoria y en vez de tirar de la base de datos, tira de los datos de Memoria
    const adapter = new Memory<DatabaseSchema>("");
    const db = lowdb(adapter);
    // QUE LE PASAMOS AQUI
    db.defaults(dbData).write();
    app = createApp(db);
  });

  it("endpoint exists", async () => {
    await request(app).get("/api/memes").expect(200);
  });

  it("returns an array", async () => {
    const response = await request(app).get("/api/memes");
    expect(response.body.memes).toBeInstanceOf(Array);
  });

  it("returns an array with 50 memes", async () => {
    // Si necesitase auth por ejemplo se podría hacer una cookie noAuth o quizás una key para los test unicamente
    const response = await request(app).get("/api/memes");
    expect(response.body.memes).toHaveLength(50);
  });
});
