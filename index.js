import express from "express";
import userRouter from "./user";

const app = express();

app.use(userRouter);

app.listen(3000, () => {
  console.log("Listening on 3000!");
});
