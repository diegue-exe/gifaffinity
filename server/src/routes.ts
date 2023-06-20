import { Router } from "express";

export const routes = Router();

routes.get("/gifs", (req, res) => {
  const db = req.context.db;
  const gifs = db.get("gifs").take(50);
  res.set("Access-Control-Allow-Origin", "*");
  res.json({ gifs: gifs }).status(200);
});

routes.get("/search", async (req, res) => {
  const db = req.context.db;
  const keyword = req.query.keyword?.toString();
  const gifs = await db.get("gifs").value();
  const hasKeyword = keyword !== undefined;

  if (hasKeyword) {
    const result = gifs.filter((gif) =>
      gif.title.toLowerCase().includes(keyword.toLowerCase())
    );
    res.set("Access-Control-Allow-Origin", "*");
    res.json({ gifs: result }).status(200);
  } else {
    res.status(404);
  }
});
