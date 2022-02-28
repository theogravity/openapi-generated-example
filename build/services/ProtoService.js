"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProtoService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ProtoService {
    /**
     * Get a list of protos
     * List protos
     * @returns PrototypeCardList OK
     * @throws ApiError
     */
    static listProtos({ page, perPage, sort, order, god, rarity, type, tribe, mana, attack, health, }) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v0/proto',
            query: {
                'page': page,
                'perPage': perPage,
                'sort': sort,
                'order': order,
                'god': god,
                'rarity': rarity,
                'type': type,
                'tribe': tribe,
                'mana': mana,
                'attack': attack,
                'health': health,
            },
        });
    }
    /**
     * Get proto by id
     * Returns the prototype card with id
     * @returns PrototypeCard OK
     * @throws ApiError
     */
    static getProto({ id, }) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v0/proto/{id}',
            path: {
                'id': id,
            },
        });
    }
    /**
     * Get card image
     * Returns an image based on the card prototype with id. To get an image in its card form, use the format and quality parameters.
     * @returns any OK
     * @throws ApiError
     */
    static getCardPrototypeImage({ id, format, h, w, quality, }) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v0/image/{id}',
            path: {
                'id': id,
            },
            query: {
                'format': format,
                'h': h,
                'w': w,
                'quality': quality,
            },
        });
    }
    /**
     * Get rarity information on protos
     * Returns rarity information about protos
     * @returns Rarity OK
     * @throws ApiError
     */
    static listRarity({ page, perPage, sort, order, user, rarity, quality, god, type, tribe, purity, mana, health, attack, proto, }) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v0/rarity',
            query: {
                'page': page,
                'perPage': perPage,
                'sort': sort,
                'order': order,
                'user': user,
                'rarity': rarity,
                'quality': quality,
                'god': god,
                'type': type,
                'tribe': tribe,
                'purity': purity,
                'mana': mana,
                'health': health,
                'attack': attack,
                'proto': proto,
            },
        });
    }
}
exports.ProtoService = ProtoService;
//# sourceMappingURL=ProtoService.js.map