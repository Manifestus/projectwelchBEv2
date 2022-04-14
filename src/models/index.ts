import { Sequelize } from "sequelize-typescript";
import { Clients } from './clients'
import { Items } from "./items";
import { orderItem } from "./orderitems";
import { Orders } from "./orders";

const uri: string =`${process.env.DATABASE_URI}` 

export const sequelize = new Sequelize(uri);

sequelize.addModels([Clients, Orders, orderItem, Items])