require("dotenv").config();

import db from './models'
import { createExpressServer } from "routing-controllers";
import { ClientController } from "./controllers/client.controller";

const port = 5000;

//Routing init
console.info(`Starting server on http://localhost:${port}`);

const routes = [ClientController];

const app = createExpressServer({
  controllers: routes,
});
//Sequelize Connector
db.sequelize.authenticate().then(() => {
  app.listen(port);
  app.get("/", (req: any, res: any) => {
    res.send("Hello World!");
  });
});
