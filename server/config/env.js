import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

const serverDirectory = path.dirname(fileURLToPath(import.meta.url));

dotenv.config({
  path: path.resolve(serverDirectory, "../.env"),
});
