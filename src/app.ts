require("dotenv").config();

import { sequelize } from "./models/index";
import { createExpressServer } from "routing-controllers";

const port = 5000;

//Routing init
console.info(`Starting server on http://localhost:${port}`);



const app = createExpressServer({
  controllers: [],
});
//Sequelize Connector
try {
    sequelize.authenticate().then(() => {
    app.listen(port);
    app.get("/", (req: any, res: any) => {
      console.log(req)
      res.send("Hello World!");
    });
  });
  } catch (error) {
  
}
