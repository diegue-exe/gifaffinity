import { DatabaseSchema } from "./models/DatabaseSchema";
import { LowdbSync } from "lowdb";

declare global {
  namespace Express {
    interface Request {
      // Lo que hacemos es sobreescribir y añadir el context a la interfaz request
      // Inyectamos la dependencia a express
      context: {
        db: LowdbSync<DatabaseSchema>;
      };
    }
  }
}
