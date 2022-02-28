"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class CardService {
    /**
     * Returns a list of token and model cards
     * Returns a list of token and model cards
     * @returns TokenModelCardList OK
     * @throws ApiError
     */
    static listCards({ user, rarity, quality, god, type, tribe, purity, mana, health, attack, proto, page, perPage, sort, order, }) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v0/card',
            query: {
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
                'page': page,
                'perPage': perPage,
                'sort': sort,
                'order': order,
            },
        });
    }
    /**
     * Get a card by id
     * Returns the token card with id and appropriate metadata. Currently conforms to both the generic and Apollo metadata specifications.
     * @returns TokenModelCard OK
     * @throws ApiError
     */
    static getCard({ id, }) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v0/card/{id}',
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
}
exports.CardService = CardService;
//# sourceMappingURL=CardService.js.map