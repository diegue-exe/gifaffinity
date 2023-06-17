import { Router } from "express";

export const routes = Router();

routes.get("/memes", (req, res) => {
  const db = req.context.db;
  const memes = db.get("memes").take(50);
  res.set("Access-Control-Allow-Origin", "*");
  res.json({ memes: memes }).status(200);
});

routes.get("/search", (req, res) => {
  const db = req.context.db;
  res.set("Access-Control-Allow-Origin", "*");
  res.sendStatus(200);
});
