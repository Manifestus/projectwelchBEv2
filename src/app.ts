require("dotenv").config();

import { sequelize } from "./models/index";
import { createExpressServer } from "routing-controllers";
import { ClientController } from "./controllers/clientController"
import { OrderController } from "./controllers/orderController";
import { OrderItemController } from "./controllers/orderitemController"

const port = 5000;

//Routing init
console.info(`Starting server on http://localhost:${port}`);

const routes = [ClientController, OrderController, OrderItemController];

const app = createExpressServer({
  controllers: routes,
});
//Sequelize Connector
try {
    sequelize.sync().then(() => {
    app.listen(process.env.PORT || 5000);
    app.get("/", (req: any, res: any) => {
      console.log(req)
      res.send("Hello World!");
    });
  });
  } catch (error) {
  
}
