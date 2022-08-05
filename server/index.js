import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/post.js";

const app = express();


app.use(bodyParser.json({ limit: "100mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

// mongodb
const CONNECTION_URL =
  "mongodb+srv://sreedeva:sreedeva@cluster0.fewqn.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT} and mongodb Connected url : ${CONNECTION_URL}`))
  )
  .catch((err) => console.log(err.message));