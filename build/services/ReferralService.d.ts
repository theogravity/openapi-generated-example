import type { ReferralList } from '../models/ReferralList';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ReferralService {
    /**
     * Get a list of referrals
     * Returns a list of referrals
     * @returns ReferralList OK
     * @throws ApiError
     */
    static listReferrals({ page, perPage, sort, order, type, referrer, purchaser, factory, }: {
        /** page number **/
        page?: number;
        /** number of items per page to return **/
        perPage?: number;
        sort?: string;
        order?: 'asc' | 'desc';
        /** card type **/
        type?: 'creature' | 'spell' | 'weapon';
        /** get referrals made by a specific user **/
        referrer?: string;
        /** get referrals made for a specific user **/
        purchaser?: string;
        /** get referrals made in a particular factory **/
        factory?: string;
    }): CancelablePromise<ReferralList>;
}
