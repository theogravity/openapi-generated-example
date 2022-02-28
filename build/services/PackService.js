"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class PackService {
    /**
     * Get a pack factory by address
     * Returns the pack factory at *address*.
     * @returns PackFactory OK
     * @throws ApiError
     */
    static getPackFactory({ address, }) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v0/factory/{address}',
            path: {
                'address': address,
            },
        });
    }
    /**
     * Get a list of pack factories
     * Get a list of pack factories
     * @returns PackFactoryList OK
     * @throws ApiError
     */
    static listFactories({ page, perPage, type, sort, order, }) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v0/factory',
            query: {
                'page': page,
                'perPage': perPage,
                'type': type,
                'sort': sort,
                'order': order,
            },
        });
    }
    /**
     * Get purchased pack from pack factory
     * Returns the pack with index from purchase id from the pack factory with address.
     * @returns PurchasedPack OK
     * @throws ApiError
     */
    static getPurchasedPack({ address, id, index, }) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v0/factory/{address}/purchase/{id}/pack/{index}',
            path: {
                'address': address,
                'id': id,
                'index': index,
            },
        });
    }
    /**
     * Get a list of packs
     * Returns a list of packs
     * @returns PackList OK
     * @throws ApiError
     */
    static listPacks({ page, perPage, sort, order, type, user, factory, purchase, opened, fill, }) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v0/pack',
            query: {
                'page': page,
                'perPage': perPage,
                'sort': sort,
                'order': order,
                'type': type,
                'user': user,
                'factory': factory,
                'purchase': purchase,
                'opened': opened,
                'fill': fill,
            },
        });
    }
}
exports.PackService = PackService;
//# sourceMappingURL=PackService.js.map