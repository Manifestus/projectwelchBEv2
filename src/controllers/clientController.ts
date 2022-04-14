import {
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  JsonController,
} from "routing-controllers";
import "reflect-metadata";
import { clientService } from "../services/client.service";
import { WhereOptions } from "sequelize/types";
import { IClient } from "../interfaces/client";

@JsonController()
export class ClientController {
  private clientService: clientService;
  constructor() {
    this.clientService = new clientService();
  }

  @Get("/clients")
  getAll() {
    const clients = this.clientService.getClients();
    return clients;
  }

  @Get("/clients/:client_id")
  getOne(@Param("client_id") uuid: string) {
    const client = this.clientService.getClient(uuid);
    return client;
  }

  @Post("/clients")
  post(@Body() client: IClient) {
    const newClient = this.clientService.createClient(client)
    return newClient
  }

  @Put("/clients/:client_id")
    put(@Param("id") client_id: WhereOptions<IClient>, @Body() user: any) {
      const updateClient = this.clientService.patchClient(client_id, user)
    return updateClient;
  }

  @Delete("/clients/:client_id")
  remove(@Param("client_id") client_id: string) {
    const removeClient = this.clientService.deleteClient(client_id)
    return removeClient
  }
}
