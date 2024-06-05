const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { sequelize } = require('../models/index');

class server {
  constructor() {
    this.init();
    this.app = express();
    this.port = process.env.PORT || 3002;
    this.host = process.env.HOST || '0.0.0.0';
    this.middlewares();
    this.routes();
    this.errorHandler();
    this.syncDatabase();
  }

  init() {
    dotenv.config();  
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
    this.app.use("../routes/productos.routes");
    this.app.use("../routes/empresas.routes");
    this.app.use("../routes/inventario.routes");
    this.app.use("../routes/usuarios.routes");
    this.app.use("../routes/ventas.routes");

  }

  errorHandler() {
    this.app.use(require("../helpers/error-handler"));
  }

  async syncDatabase() {
    try {
      await sequelize.sync({ force: true });
      console.log('Database synced successfully.');
    } catch (error) {
      console.error('Error syncing database:', error);
    }
  }

  listen() {
    const server = this.app.listen(this.port, this.host, (err) => {
      if (err) {
        console.log("entra para cerrar el proces");
        console.log(err);
        process.exit(1);
      }
      console.log(`Server is running on ${this.host}:${server.address().port}`);
    });
  }
}

module.exports = server;

const serverInstance = new server();
serverInstance.listen();
