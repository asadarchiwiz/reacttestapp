import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 8080;

// serve static assets
app.use(express.static(path.join(__dirname, "dist")));

// SPA fallback (Express 5 / path-to-regexp v6 compatible)
app.get("(.*)", (_req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => console.log(`Listening on ${port}`));
