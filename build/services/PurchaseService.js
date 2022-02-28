"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class PurchaseService {
    /**
     * Get a list of purchases
     * Returns a list of purchases
     * @returns PurchaseList OK
     * @throws ApiError
     */
    static listPurchases({ page, perPage, type, user, factory, remaining, count, sort, order, }) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v0/purchase',
            query: {
                'page': page,
                'perPage': perPage,
                'type': type,
                'user': user,
                'factory': factory,
                'remaining': remaining,
                'count': count,
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
}
exports.PurchaseService = PurchaseService;
//# sourceMappingURL=PurchaseService.js.map