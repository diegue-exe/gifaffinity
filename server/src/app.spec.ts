import { createApp } from "./app";
import request from "supertest";
import { DatabaseSchema } from "./models/DatabaseSchema";
import Memory from "lowdb/adapters/Memory";
import lowdb from "lowdb";
import { Express } from "express";
import dbData from "./fixtures/db.json";
import { Gif } from "./models/Gif";

describe("/api/gifs", () => {
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
    await request(app).get("/api/gifs").expect(200);
  });

  it("returns an array", async () => {
    const response = await request(app).get("/api/gifs");
    expect(response.body.gifs).toBeInstanceOf(Array);
  });

  it("returns an array with 50 gifs", async () => {
    // Si necesitase auth por ejemplo se podría hacer una cookie noAuth o quizás una key para los test unicamente
    const response = await request(app).get("/api/gifs");
    expect(response.body.gifs).toHaveLength(50);
  });
});

describe("/api/search", () => {
  let app: Express;

  beforeEach(() => {
    const adapter = new Memory<DatabaseSchema>("");
    const db = lowdb(adapter);
    db.defaults(dbData).write();
    app = createApp(db);
  });

  it("endpoint exists", async () => {
    await request(app).get("/api/search?keyword=cat").expect(200);
  });

  it("returns an array", async () => {
    const response = await request(app).get("/api/search?keyword=cat");
    expect(response.body.gifs).toBeInstanceOf(Array);
  });

  it("returns an array with cats", async () => {
    const response = await request(app).get("/api/search?keyword=cat");
    const gifs: Gif[] = await response.body.gifs;
    gifs.forEach((gif: Gif) => {
      expect(gif.title.toLowerCase()).toContain("cat");
    });
  });
});
