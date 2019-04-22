import express, { urlencoded, json } from "express";
import logger from "morgan";

import userRouter from "./routes/user";
import indexRouter from "./routes/index";
import { mongo } from "mongoose";
import { UserSchema, UserModel } from "./models/user";

const app = express();

const port = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(urlencoded({ extended: false }));
app.use(json());
app.use(logErrors);
app.use(errorHandler);

app.use(userRouter);
app.use(indexRouter);

function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
}

mongo
  .connect("mongodb://localhost:27017/physys", { useNewUrlParser: true })
  .then(() => console.log("Connected!"))
  .catch(err => console.log(err));

var user = app.listen(port, () => {
  console.log("Server listening on port ", port);
});

export default app;
