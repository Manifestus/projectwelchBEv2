require("dotenv").config();

import db from './models'
import { createExpressServer } from "routing-controllers";
import { ClientController } from "./controllers/client.controller";
import { OrderController } from "./controllers/order.controller";
import { OrderItemController } from "./controllers/orderitem.Controller";

const port = 5000;

//Routing init
console.info(`Starting server on http://localhost:${port}`);

const routes = [ClientController, OrderController, OrderItemController];

const app = createExpressServer({
  controllers: routes,
});
//Sequelize Connector
db.sequelize.authenticate().then(() => {
  app.listen(port);
  app.get("/", (req: any, res: any) => {
    console.log(req)
    res.send("Hello World!");
  });
});
