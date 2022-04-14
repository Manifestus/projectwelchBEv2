"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const index_1 = require("./models/index");
const routing_controllers_1 = require("routing-controllers");
const client_controller_1 = require("./controllers/client.controller");
const order_controller_1 = require("./controllers/order.controller");
const orderitem_Controller_1 = require("./controllers/orderitem.Controller");
const port = 5000;
console.info(`Starting server on http://localhost:${port}`);
const routes = [client_controller_1.ClientController, order_controller_1.OrderController, orderitem_Controller_1.OrderItemController];
const app = (0, routing_controllers_1.createExpressServer)({
    controllers: routes,
});
try {
    index_1.sequelize.sync().then(() => {
        app.listen(port);
        app.get("/", (req, res) => {
            console.log(req);
            res.send("Hello World!");
        });
    });
}
catch (error) {
}
//# sourceMappingURL=app.js.map