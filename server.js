const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const config = require("config");
const colors = require("colors");
const bodyParser = require("body-parser");

class Server {
  constructor() {
    this.init();
    this.app = express();
    this.port = process.env.PORT;
    this.host = process.env.HOST;
    this.middlewares();
    this.routes();
    this.errorHandler();
  }

  init() {
    dotenv.config();
  }

  middlewares() {
    const corsOptions = {
      origin: "*",
    };

    this.app.use(cors(corsOptions));
    this.app.use(bodyParser.urlencoded({extended: true}))
    this.app.use(bodyParser.json())
    this.app.use(morgan("combined"));
    
  }

  routes() {
    this.app.use("/api", require("./routes"));
  }

  errorHandler() {
    this.app.use(require("./helpers/error-handler"));
  }

  listen() {
    const server = this.app.listen(this.port, this.host, (err) => {
      if (err) {
        console.log("entra para cerrar el proces")
        console.log(err);
        process.exit(1);
      }

      console.log(`Server is running on ${this.host}:${server.address().port}`);
    });
  }
}

module.exports = Server;
