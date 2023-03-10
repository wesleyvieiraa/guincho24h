const testeController = require("./teste.controller");

var router = require("express").Router();

router.get(
  "",
  testeController.teste
);

module.exports = router;
