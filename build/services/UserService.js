"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class UserService {
    /**
     * @deprecated
     * Get a user
     * Get a user. No longer opeational. Use the Immutable X /assets endpoint instead.
     * @returns any OK
     * @throws ApiError
     */
    static getUser({ address, }) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v0/user/{address}',
            path: {
                'address': address,
            },
        });
    }
    /**
     * Get user inventory
     * Returns the inventory of the user with address address, including token, shadow and centralized cards.
     * @returns UserInventoryItemList OK
     * @throws ApiError
     */
    static getUserInventory({ address, page, perPage, sort, order, rarity, quality, god, type, tribe, purity, mana, health, attack, proto, }) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v0/user/{address}/inventory',
            path: {
                'address': address,
            },
            query: {
                'page': page,
                'perPage': perPage,
                'sort': sort,
                'order': order,
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
exports.UserService = UserService;
//# sourceMappingURL=UserService.js.map