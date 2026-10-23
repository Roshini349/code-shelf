import express from "express";

const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Code Shelf backend is running",
  });
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});