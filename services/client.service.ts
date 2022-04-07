import { IClient } from "../interfaces/client";

const { Clients } = require('../models')

export class clientService {
  constructor() {}

  //Single Client
  getClient = async (uuid: string) => {
    const client = await Clients.findOne({
      where: { uuid },
    });
    return client;
  };
  //All clients
  getClients = async () => {
    const clientsRes = await Clients.findAll();

    return clientsRes;
  };
  //Post Client
  createClient = async (client: IClient) => {
    try {
      const clientRes = await Clients.create(client);
      return clientRes;
    } catch (error) {
      console.error(error);
    }
  };

  //Patch Client
  patchClient = async (uuid: string, patchingValues: Partial<IClient>) => {
    try {
      const clientPatch = await Clients.update(patchingValues, {
        where: uuid,
      });
      return clientPatch;
    } catch (error) {}
  };

  //Delete Client
  deleteClient = async (uuid: string) => {
    const clientDelete = await Clients.destroy({
      where: { uuid },
    });
    return clientDelete;
  };
}
