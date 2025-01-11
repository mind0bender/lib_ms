import { connect } from "mongoose";
import { MONGO_URI } from "../utils/const.js";

export default function connectDB() {
  connect(MONGO_URI)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.error(err);
    });
}
