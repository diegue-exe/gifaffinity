import { Router } from "express";

export const routes = Router();

routes.get("/memes", (req, res) => {
  const db = req.context.db;
  const memes = db.get("memes").take(300);
  res.set("Access-Control-Allow-Origin", "*");
  res.json({ memes: memes }).status(200);
});
