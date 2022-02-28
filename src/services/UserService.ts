/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserInventoryItemList } from '../models/UserInventoryItemList';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * @deprecated
     * Get a user
     * Get a user. No longer opeational. Use the Immutable X /assets endpoint instead.
     * @returns any OK
     * @throws ApiError
     */
    public static getUser({
        address,
    }: {
        /** the Ethereum address of the user **/
        address: string,
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
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
    public static getUserInventory({
        address,
        page,
        perPage,
        sort,
        order,
        rarity,
        quality,
        god,
        type,
        tribe,
        purity,
        mana,
        health,
        attack,
        proto,
    }: {
        /** user ethereum address **/
        address: string,
        /** page number **/
        page?: number,
        /** number of items per page to return **/
        perPage?: number,
        sort?: string,
        order?: 'asc' | 'desc',
        /** card rarity **/
        rarity?: 'common' | 'rare' | 'epic' | 'legendary' | 'mythic',
        /** card quality **/
        quality?: 'plain' | 'shadow' | 'gold' | 'diamond',
        /** card god type **/
        god?: 'light' | 'death' | 'nature' | 'war' | 'magic' | 'deception',
        /** card type **/
        type?: 'creature' | 'spell' | 'weapon',
        /** card tribe type **/
        tribe?: 'nether' | 'aether' | 'atlantean' | 'viking' | 'olympian' | 'anubian' | 'amazon',
        /** card purity range **/
        purity?: string,
        /** card mana range **/
        mana?: string,
        /** card health range **/
        health?: string,
        /** card attack range **/
        attack?: string,
        /** card prototype id **/
        proto?: number,
    }): CancelablePromise<UserInventoryItemList> {
        return __request(OpenAPI, {
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