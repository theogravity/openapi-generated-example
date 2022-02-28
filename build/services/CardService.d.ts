import type { TokenModelCard } from '../models/TokenModelCard';
import type { TokenModelCardList } from '../models/TokenModelCardList';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class CardService {
    /**
     * Returns a list of token and model cards
     * Returns a list of token and model cards
     * @returns TokenModelCardList OK
     * @throws ApiError
     */
    static listCards({ user, rarity, quality, god, type, tribe, purity, mana, health, attack, proto, page, perPage, sort, order, }: {
        /** get cards owned by a specific address **/
        user?: string;
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
        /** page number **/
        page?: number;
        /** number of items per page to return **/
        perPage?: number;
        sort?: string;
        order?: 'asc' | 'desc';
    }): CancelablePromise<TokenModelCardList>;
    /**
     * Get a card by id
     * Returns the token card with id and appropriate metadata. Currently conforms to both the generic and Apollo metadata specifications.
     * @returns TokenModelCard OK
     * @throws ApiError
     */
    static getCard({ id, }: {
        /** ERC721 id of the card **/
        id: string;
    }): CancelablePromise<TokenModelCard>;
    /**
     * Get card image
     * Returns an image based on the card prototype with id. To get an image in its card form, use the format and quality parameters.
     * @returns any OK
     * @throws ApiError
     */
    static getCardPrototypeImage({ id, format, h, w, quality, }: {
        /** card prototype id **/
        id: string;
        format?: 'full' | 'card';
        /** the height to which the image will be resized **/
        h?: number;
        /** the width to which the image will be resized **/
        w?: number;
        /** card quality **/
        quality?: 'plain' | 'shadow' | 'gold' | 'diamond';
    }): CancelablePromise<any>;
}
