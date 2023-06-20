import { Router } from "express";

export const routes = Router();

//TODO /gifs mejor
routes.get("/memes", (req, res) => {
  const db = req.context.db;
  const memes = db.get("memes").take(50);
  res.set("Access-Control-Allow-Origin", "*");
  res.json({ memes: memes }).status(200);
});

routes.get("/search", async (req, res) => {
  const db = req.context.db;
  const keyword = req.query.keyword?.toString();
  const memes = await db.get("memes").value();
  const hasKeyword = keyword !== undefined;

  if (hasKeyword) {
    const result = memes.filter((meme) =>
      meme.title.toLowerCase().includes(keyword.toLowerCase())
    );
    res.set("Access-Control-Allow-Origin", "*");
    res.json({ memes: result }).status(200);
  } else {
    res.status(404);
  }
});
