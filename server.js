const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const bodyParser = require("body-parser");
const sequelize = require('./config/database'); // Importa la conexión de la base de datos

class Server {
  constructor() {
    this.init();
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.host = process.env.HOST || 'localhost';
    this.middlewares();
    this.routes();
    this.errorHandler();
  }

  async init() {
    dotenv.config();

    try {
      // Autentica la conexión con la base de datos
      await sequelize.authenticate();
      console.log('Database authenticated successfully');
      // Sincroniza todos los modelos con la base de datos
      await sequelize.sync();
      console.log('Database synchronized successfully');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  middlewares() {
    const corsOptions = {
      origin: "*",
    };

    this.app.use(cors(corsOptions));
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
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
        console.log("Error al iniciar el servidor:");
        console.error(err);
        process.exit(1);
      }

      console.log(`Server is running on ${this.host}:${server.address().port}`);
    });
  }
}

module.exports = Server;
