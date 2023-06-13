import { Router } from "express";

export const routes = Router();

routes.get("/memes", (req, res) => {
  const db = req.context.db;
  const memes = db.get("memes").take(50);
  res.json({ memes: memes }).status(200);
});
