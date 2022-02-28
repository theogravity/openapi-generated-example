import type { UserInventoryItemList } from '../models/UserInventoryItemList';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class UserService {
    /**
     * @deprecated
     * Get a user
     * Get a user. No longer opeational. Use the Immutable X /assets endpoint instead.
     * @returns any OK
     * @throws ApiError
     */
    static getUser({ address, }: {
        /** the Ethereum address of the user **/
        address: string;
    }): CancelablePromise<any>;
    /**
     * Get user inventory
     * Returns the inventory of the user with address address, including token, shadow and centralized cards.
     * @returns UserInventoryItemList OK
     * @throws ApiError
     */
    static getUserInventory({ address, page, perPage, sort, order, rarity, quality, god, type, tribe, purity, mana, health, attack, proto, }: {
        /** user ethereum address **/
        address: string;
        /** page number **/
        page?: number;
        /** number of items per page to return **/
        perPage?: number;
        sort?: string;
        order?: 'asc' | 'desc';
        /** card rarity **/
        rarity?: 'common' | 'rare' | 'epic' | 'legendary' | 'mythic';
        /** card quality **/
        quality?: 'plain' | 'shadow' | 'gold' | 'diamond';
        /** card god type **/
        god?: 'light' | 'death' | 'nature' | 'war' | 'magic' | 'deception';
        /** card type **/
        type?: 'creature' | 'spell' | 'weapon';
        /** card tribe type **/
        tribe?: 'nether' | 'aether' | 'atlantean' | 'viking' | 'olympian' | 'anubian' | 'amazon';
        /** card purity range **/
        purity?: string;
        /** card mana range **/
        mana?: string;
        /** card health range **/
        health?: string;
        /** card attack range **/
        attack?: string;
        /** card prototype id **/
        proto?: number;
    }): CancelablePromise<UserInventoryItemList>;
}
