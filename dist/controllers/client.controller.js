"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientController = void 0;
const routing_controllers_1 = require("routing-controllers");
require("reflect-metadata");
const client_service_1 = require("../services/client.service");
let ClientController = class ClientController {
    constructor() {
        this.clientService = new client_service_1.clientService();
    }
    getAll() {
        const clients = this.clientService.getClients();
        return clients;
    }
    getOne(uuid) {
        const client = this.clientService.getClient(uuid);
        return client;
    }
    post(client) {
        const newClient = this.clientService.createClient(client);
        return newClient;
    }
    put(client_id, user) {
        const updateClient = this.clientService.patchClient(client_id, user);
        return updateClient;
    }
    remove(client_id) {
        const removeClient = this.clientService.deleteClient(client_id);
        return removeClient;
    }
};
__decorate([
    (0, routing_controllers_1.Get)("/clients"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClientController.prototype, "getAll", null);
__decorate([
    (0, routing_controllers_1.Get)("/clients/:client_id"),
    __param(0, (0, routing_controllers_1.Param)("client_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientController.prototype, "getOne", null);
__decorate([
    (0, routing_controllers_1.Post)("/clients"),
    __param(0, (0, routing_controllers_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientController.prototype, "post", null);
__decorate([
    (0, routing_controllers_1.Put)("/clients/:client_id"),
    __param(0, (0, routing_controllers_1.Param)("id")),
    __param(1, (0, routing_controllers_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], ClientController.prototype, "put", null);
__decorate([
    (0, routing_controllers_1.Delete)("/clients/:client_id"),
    __param(0, (0, routing_controllers_1.Param)("client_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClientController.prototype, "remove", null);
ClientController = __decorate([
    (0, routing_controllers_1.JsonController)(),
    __metadata("design:paramtypes", [])
], ClientController);
exports.ClientController = ClientController;
//# sourceMappingURL=client.controller.js.map