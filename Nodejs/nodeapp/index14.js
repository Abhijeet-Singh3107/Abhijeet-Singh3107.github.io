import express from "express";
import mongoose from "mongoose";
import userRouter from "./userRoute.js";


const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/lpu").then(() => {
  app.listen(8080, () => {
    console.log("Server started on port 8080...");
  });
});

app.use("/api/users", userRouter);
