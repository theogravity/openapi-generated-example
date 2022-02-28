"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeckService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class DeckService {
    /**
     * Encodes a deck into a deck string
     * Encodes a deck into a deck string
     * @returns any OK
     * @throws ApiError
     */
    static encodeDeck({ requestBody, }) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/v0/deck',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Decodes a deck string
     * Decodes a deck from a deck string
     * @returns DecodedDeck OK
     * @throws ApiError
     */
    static decodeDeckString({ string, }) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v0/deck/{string}',
            path: {
                'string': string,
            },
        });
    }
}
exports.DeckService = DeckService;
//# sourceMappingURL=DeckService.js.map