import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

import { usersRouter } from "./users/users.router";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/info", );

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
