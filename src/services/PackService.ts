/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PackFactory } from '../models/PackFactory';
import type { PackFactoryList } from '../models/PackFactoryList';
import type { PackList } from '../models/PackList';
import type { PurchasedPack } from '../models/PurchasedPack';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PackService {

    /**
     * Get a pack factory by address
     * Returns the pack factory at *address*.
     * @returns PackFactory OK
     * @throws ApiError
     */
    public static getPackFactory({
        address,
    }: {
        address: string,
    }): CancelablePromise<PackFactory> {
        return __request(OpenAPI, {
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
    public static listFactories({
        page,
        perPage,
        type,
        sort,
        order,
    }: {
        /** page number **/
        page?: number,
        /** number of items per page to return **/
        perPage?: number,
        /** card type **/
        type?: 'creature' | 'spell' | 'weapon',
        sort?: string,
        order?: 'asc' | 'desc',
    }): CancelablePromise<PackFactoryList> {
        return __request(OpenAPI, {
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
    public static getPurchasedPack({
        address,
        id,
        index,
    }: {
        /** address of the pack factory **/
        address: string,
        /** id of the purchase **/
        id: string,
        /** index of the pack within the purchase **/
        index: string,
    }): CancelablePromise<PurchasedPack> {
        return __request(OpenAPI, {
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
    public static listPacks({
        page,
        perPage,
        sort,
        order,
        type,
        user,
        factory,
        purchase,
        opened,
        fill,
    }: {
        /** page number **/
        page?: number,
        /** number of items per page to return **/
        perPage?: number,
        sort?: string,
        order?: 'asc' | 'desc',
        /** card type **/
        type?: 'creature' | 'spell' | 'weapon',
        /** get packs purchased by a specific user **/
        user?: string,
        /** get packs created by a specific factory **/
        factory?: string,
        /** get packs created in a specific purchase range **/
        purchase?: string,
        /** whether these packs have been opened **/
        opened?: boolean,
        /** whether to fill these packs with their cards **/
        fill?: boolean,
    }): CancelablePromise<PackList> {
        return __request(OpenAPI, {
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