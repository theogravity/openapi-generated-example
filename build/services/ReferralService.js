"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferralService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ReferralService {
    /**
     * Get a list of referrals
     * Returns a list of referrals
     * @returns ReferralList OK
     * @throws ApiError
     */
    static listReferrals({ page, perPage, sort, order, type, referrer, purchaser, factory, }) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/v0/referral',
            query: {
                'page': page,
                'perPage': perPage,
                'sort': sort,
                'order': order,
                'type': type,
                'referrer': referrer,
                'purchaser': purchaser,
                'factory': factory,
            },
        });
    }
}
exports.ReferralService = ReferralService;
//# sourceMappingURL=ReferralService.js.map