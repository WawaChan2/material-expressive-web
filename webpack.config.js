import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./frontend/src/index.js",

  output: {
    path: path.resolve(__dirname, "src/main/resources/static/js"),
    filename: "bundle.js",
    clean: true,
  },

  mode: "production",
};
