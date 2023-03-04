const cityController = require("./city-controller");

var router = require("express").Router();

// GET 
router.get(
  "",
  cityController.getCitiesList
);

router.get(
  "/customer/uf/:idUf",
  cityController.getCompaniesCityByIdUf
);

module.exports = router;
