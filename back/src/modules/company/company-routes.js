const companyController = require("./company-controller");

var router = require("express").Router();

// GET 
router.get(
  "",
  companyController.getCompaniesList
);

router.get(
  "/id/:idCity",
  companyController.getCompaniesListByCity
);

module.exports = router;
