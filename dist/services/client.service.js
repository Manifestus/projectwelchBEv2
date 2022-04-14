"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientService = void 0;
const clients_1 = require("../models/clients");
class clientService {
    constructor() {
        this.getClient = async (client_id) => {
            const client = await clients_1.Clients.findOne({
                where: { client_id },
            });
            return client;
        };
        this.getClients = async () => {
            const clientsRes = await clients_1.Clients.findAll();
            return clientsRes;
        };
        this.createClient = async (client) => {
            try {
                const clientRes = await clients_1.Clients.create(client);
                return clientRes;
            }
            catch (error) {
                console.error(error);
            }
            return "Error Creating";
        };
        this.patchClient = async (client_id, patchingValues) => {
            try {
                const clientPatch = await clients_1.Clients.update(patchingValues, {
                    where: client_id,
                });
                return clientPatch;
            }
            catch (error) {
                console.error(error);
            }
            return "Error Patching";
        };
        this.deleteClient = async (client_id) => {
            const clientDelete = await clients_1.Clients.destroy({
                where: { client_id },
            });
            return clientDelete;
        };
    }
}
exports.clientService = clientService;
//# sourceMappingURL=client.service.js.map