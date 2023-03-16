require("dotenv").config({
  path: process.env.NODE_ENV == "test" ? ".env.test" : ".env",
});

const express = require("express");
const cors = require("cors");

class AppController {
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json());
    this.express.use('/static', express.static("./public"));
  }

  routes() {
    this.express.use("/api/v1/teste", require("./modules/teste/teste-routes"));
    this.express.use("/api/v1/states", require("./modules/state/state-routes"));
    this.express.use("/api/v1/cities", require("./modules/city/city-routes"));
    this.express.use("/api/v1/companies", require("./modules/company/company-routes"));
    this.express.use("/api/v1/sendmessage", require("./modules/message-service/message-service-routes"));
    this.express.use(express.static(process.cwd() + "/dist-front"));
    /** Angular */
    this.express.get('/*', (request, response) => {
      response.sendFile(process.cwd() + "/dist-front/index.html");
    });
  }

}

module.exports = new AppController().express;