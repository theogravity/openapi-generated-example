/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrototypeCard } from '../models/PrototypeCard';
import type { PrototypeCardList } from '../models/PrototypeCardList';
import type { Rarity } from '../models/Rarity';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProtoService {

    /**
     * Get a list of protos
     * List protos
     * @returns PrototypeCardList OK
     * @throws ApiError
     */
    public static listProtos({
        page,
        perPage,
        sort,
        order,
        god,
        rarity,
        type,
        tribe,
        mana,
        attack,
        health,
    }: {
        /** page number **/
        page?: number,
        /** number of items per page to return **/
        perPage?: number,
        sort?: string,
        order?: 'asc' | 'desc',
        /** card god type **/
        god?: 'light' | 'death' | 'nature' | 'war' | 'magic' | 'deception',
        /** card rarity **/
        rarity?: 'common' | 'rare' | 'epic' | 'legendary' | 'mythic',
        /** card type **/
        type?: 'creature' | 'spell' | 'weapon',
        /** card tribe type **/
        tribe?: 'nether' | 'aether' | 'atlantean' | 'viking' | 'olympian' | 'anubian' | 'amazon',
        /** card mana range **/
        mana?: string,
        /** card attack range **/
        attack?: string,
        /** card health range **/
        health?: string,
    }): CancelablePromise<PrototypeCardList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0/proto',
            query: {
                'page': page,
                'perPage': perPage,
                'sort': sort,
                'order': order,
                'god': god,
                'rarity': rarity,
                'type': type,
                'tribe': tribe,
                'mana': mana,
                'attack': attack,
                'health': health,
            },
        });
    }

    /**
     * Get proto by id
     * Returns the prototype card with id
     * @returns PrototypeCard OK
     * @throws ApiError
     */
    public static getProto({
        id,
    }: {
        /** id of the prototype card **/
        id: string,
    }): CancelablePromise<PrototypeCard> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0/proto/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get card image
     * Returns an image based on the card prototype with id. To get an image in its card form, use the format and quality parameters.
     * @returns any OK
     * @throws ApiError
     */
    public static getCardPrototypeImage({
        id,
        format,
        h,
        w,
        quality,
    }: {
        /** card prototype id **/
        id: string,
        format?: 'full' | 'card',
        /** the height to which the image will be resized **/
        h?: number,
        /** the width to which the image will be resized **/
        w?: number,
        /** card quality **/
        quality?: 'plain' | 'shadow' | 'gold' | 'diamond',
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0/image/{id}',
            path: {
                'id': id,
            },
            query: {
                'format': format,
                'h': h,
                'w': w,
                'quality': quality,
            },
        });
    }

    /**
     * Get rarity information on protos
     * Returns rarity information about protos
     * @returns Rarity OK
     * @throws ApiError
     */
    public static listRarity({
        page,
        perPage,
        sort,
        order,
        user,
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
        /** page number **/
        page?: number,
        /** number of items per page to return **/
        perPage?: number,
        sort?: 'proto' | 'plain' | 'shadow' | 'gold' | 'diamond',
        order?: 'asc' | 'desc',
        /** get rarity info about cards owned by a specific address **/
        user?: string,
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
    }): CancelablePromise<Rarity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0/rarity',
            query: {
                'page': page,
                'perPage': perPage,
                'sort': sort,
                'order': order,
                'user': user,
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