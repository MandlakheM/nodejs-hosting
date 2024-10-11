import express from "express";

const app = express()
const PORT = 8080

app.get("/", (req, res) => res.send("hello from back end"));

app.listen(PORT, () =>
    console.log(`server listening on http://localhost:${PORT}`)
  );