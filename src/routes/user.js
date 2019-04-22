import { Router } from "express";
import { UserModel } from "../models/user";

const router = Router();

router.get("/users", (req, res, next) => {
  let method = req.method;
  let path = req.path;
  res.status(200).send({
    method: method,
    path: path
  });
});

router.post("/users", (req, res, next) => {
  var user = {
    name: "Janaelson Alves",
    weigth: 67,
    height: 167,
    birth: new Date()
  };

  UserModel.create(user)
    .then(user => console.log("User registered!"))
    .catch("Failed to register!");

  let method = req.method;
  let path = req.path;
  res.status(200).send({
    method: method,
    path: path
  });
});

router.get("/users/:id", (req, res, next) => {
  let method = req.method;
  let path = req.path;
  res.status(200).send({
    method: method,
    path: path
  });
});

router.put("/users/:id", (req, res, next) => {
  let method = req.method;
  let path = req.path;
  res.status(200).send({
    method: method,
    path: path
  });
});

router.delete("/users/:id", (req, res, next) => {
  let method = req.method;
  let path = req.path;
  res.status(200).send({
    method: method,
    path: path
  });
});

export default router;
