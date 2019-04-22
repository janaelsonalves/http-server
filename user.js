import { Router } from "express";

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
