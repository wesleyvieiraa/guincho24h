const testeController = require("./teste.controller");

var router = require("express").Router();

router.get(
  "/teste",
  testeController.teste
);

module.exports = router;
