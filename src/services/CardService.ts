/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TokenModelCard } from '../models/TokenModelCard';
import type { TokenModelCardList } from '../models/TokenModelCardList';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CardService {

    /**
     * Returns a list of token and model cards
     * Returns a list of token and model cards
     * @returns TokenModelCardList OK
     * @throws ApiError
     */
    public static listCards({
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
        page,
        perPage,
        sort,
        order,
    }: {
        /** get cards owned by a specific address **/
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
        /** page number **/
        page?: number,
        /** number of items per page to return **/
        perPage?: number,
        sort?: string,
        order?: 'asc' | 'desc',
    }): CancelablePromise<TokenModelCardList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0/card',
            query: {
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
                'page': page,
                'perPage': perPage,
                'sort': sort,
                'order': order,
            },
        });
    }

    /**
     * Get a card by id
     * Returns the token card with id and appropriate metadata. Currently conforms to both the generic and Apollo metadata specifications.
     * @returns TokenModelCard OK
     * @throws ApiError
     */
    public static getCard({
        id,
    }: {
        /** ERC721 id of the card **/
        id: string,
    }): CancelablePromise<TokenModelCard> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0/card/{id}',
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

}