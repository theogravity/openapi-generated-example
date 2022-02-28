/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReferralList } from '../models/ReferralList';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ReferralService {

    /**
     * Get a list of referrals
     * Returns a list of referrals
     * @returns ReferralList OK
     * @throws ApiError
     */
    public static listReferrals({
        page,
        perPage,
        sort,
        order,
        type,
        referrer,
        purchaser,
        factory,
    }: {
        /** page number **/
        page?: number,
        /** number of items per page to return **/
        perPage?: number,
        sort?: string,
        order?: 'asc' | 'desc',
        /** card type **/
        type?: 'creature' | 'spell' | 'weapon',
        /** get referrals made by a specific user **/
        referrer?: string,
        /** get referrals made for a specific user **/
        purchaser?: string,
        /** get referrals made in a particular factory **/
        factory?: string,
    }): CancelablePromise<ReferralList> {
        return __request(OpenAPI, {
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