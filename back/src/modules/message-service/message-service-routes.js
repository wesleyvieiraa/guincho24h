const messageServiceController = require("./message-service-controller");
var router = require("express").Router();

// POST
router.post(
  "",
  messageServiceController.sendMessage
);

module.exports = router;
