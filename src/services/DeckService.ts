/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DecodedDeck } from '../models/DecodedDeck';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DeckService {

    /**
     * Encodes a deck into a deck string
     * Encodes a deck into a deck string
     * @returns any OK
     * @throws ApiError
     */
    public static encodeDeck({
        requestBody,
    }: {
        requestBody?: {
            version: number;
            god: string;
            protos: Array<any>;
        },
    }): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v0/deck',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Decodes a deck string
     * Decodes a deck from a deck string
     * @returns DecodedDeck OK
     * @throws ApiError
     */
    public static decodeDeckString({
        string,
    }: {
        /** deck string **/
        string: string,
    }): CancelablePromise<DecodedDeck> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v0/deck/{string}',
            path: {
                'string': string,
            },
        });
    }

}