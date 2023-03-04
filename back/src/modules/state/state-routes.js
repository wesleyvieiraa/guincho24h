const stateController = require("./state-controller");
var router = require("express").Router();

router.get(
  "",
  stateController.getStatesListAll
);

router.get(
  "/customer",
  stateController.getCustomerStatesList
)

module.exports = router;
