import type { DecodedDeck } from '../models/DecodedDeck';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class DeckService {
    /**
     * Encodes a deck into a deck string
     * Encodes a deck into a deck string
     * @returns any OK
     * @throws ApiError
     */
    static encodeDeck({ requestBody, }: {
        requestBody?: {
            version: number;
            god: string;
            protos: Array<any>;
        };
    }): CancelablePromise<any>;
    /**
     * Decodes a deck string
     * Decodes a deck from a deck string
     * @returns DecodedDeck OK
     * @throws ApiError
     */
    static decodeDeckString({ string, }: {
        /** deck string **/
        string: string;
    }): CancelablePromise<DecodedDeck>;
}
