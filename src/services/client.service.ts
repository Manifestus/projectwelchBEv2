import { WhereOptions } from "sequelize/types";
import { IClient, IClientCreationAttributes } from "../interfaces/client";
import { Clients as ClientsModel } from "../models/clients";

export class clientService {
  constructor() {}

  //Single Client
  getClient = async (client_id: string) => {
    const client = await ClientsModel.findOne({
      where: { client_id },
    });
    return client;
  };
  //All clients
  getClients = async () => {
    const clientsRes = await ClientsModel.findAll();

    return clientsRes;
  };
  //Post Client
  createClient = async (client: IClientCreationAttributes) => {
    try {
      const clientRes = await ClientsModel.create(client);
      return clientRes;
    } catch (error) {
      console.error(error);
    }
    return "Error Creating";
  };

  //Patch Client
  patchClient = async (
    client_id: WhereOptions<IClient>,
    patchingValues: Partial<IClient>
  ) => {
    try {
      const clientPatch = await ClientsModel.update(patchingValues, {
        where: client_id,
      });
      return clientPatch;
    } catch (error) {
      console.error(error);
    }
    return "Error Patching";
  };

  //Delete Client
  deleteClient = async (client_id: string) => {
    const clientDelete = await ClientsModel.destroy({
      where: { client_id },
    });
    return clientDelete;
  };
}
