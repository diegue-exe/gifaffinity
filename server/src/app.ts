import express, { Express } from "express";
import morgan from "morgan";
import { routes } from "./routes";
import { DatabaseSchema } from "./models/DatabaseSchema";
import { LowdbSync } from "lowdb";

export function createApp(db: LowdbSync<DatabaseSchema>) {
  const app: Express = express();
  const isOnTestMode = process.env.NODE_ENV?.trim() === "test";

  app.use((req, res, next) => {
    req.context = { db };
    next();
  });

  if (!isOnTestMode) {
    app.use(morgan("dev"));
  }

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use("/api", routes);

  return app;
}
