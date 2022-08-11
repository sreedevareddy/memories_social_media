import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';

import postRoutes from "./routes/post.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "100mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

// mongodb
const CONNECTION_URL = process.env.MONGOOSE_URI;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT} and mongodb Connected url : ${CONNECTION_URL}`))
  )
  .catch((err) => console.log(err.message));