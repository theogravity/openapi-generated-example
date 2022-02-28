import type { PurchasedPack } from '../models/PurchasedPack';
import type { PurchaseList } from '../models/PurchaseList';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class PurchaseService {
    /**
     * Get a list of purchases
     * Returns a list of purchases
     * @returns PurchaseList OK
     * @throws ApiError
     */
    static listPurchases({ page, perPage, type, user, factory, remaining, count, sort, order, }: {
        /** page number **/
        page?: number;
        /** number of items per page to return **/
        perPage?: number;
        /** card type **/
        type?: 'creature' | 'spell' | 'weapon';
        /** get purchases made by a specific user **/
        user?: string;
        /** get purchases made in a specific factory **/
        factory?: string;
        /** number of packs remaining to be activated from this purchase **/
        remaining?: string;
        /** number of packs purchased in this purchase **/
        count?: string;
        sort?: string;
        order?: 'asc' | 'desc';
    }): CancelablePromise<PurchaseList>;
    /**
     * Get purchased pack from pack factory
     * Returns the pack with index from purchase id from the pack factory with address.
     * @returns PurchasedPack OK
     * @throws ApiError
     */
    static getPurchasedPack({ address, id, index, }: {
        /** address of the pack factory **/
        address: string;
        /** id of the purchase **/
        id: string;
        /** index of the pack within the purchase **/
        index: string;
    }): CancelablePromise<PurchasedPack>;
}
