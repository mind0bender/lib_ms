import express from "express";
import connectDB from "./db/index.js";
import { PORT } from "./utils/const.js";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(helmet());
app.use(
  cors({
    origin: "*",
  })
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
