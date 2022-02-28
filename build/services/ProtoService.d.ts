import type { PrototypeCard } from '../models/PrototypeCard';
import type { PrototypeCardList } from '../models/PrototypeCardList';
import type { Rarity } from '../models/Rarity';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class ProtoService {
    /**
     * Get a list of protos
     * List protos
     * @returns PrototypeCardList OK
     * @throws ApiError
     */
    static listProtos({ page, perPage, sort, order, god, rarity, type, tribe, mana, attack, health, }: {
        /** page number **/
        page?: number;
        /** number of items per page to return **/
        perPage?: number;
        sort?: string;
        order?: 'asc' | 'desc';
        /** card god type **/
        god?: 'light' | 'death' | 'nature' | 'war' | 'magic' | 'deception';
        /** card rarity **/
        rarity?: 'common' | 'rare' | 'epic' | 'legendary' | 'mythic';
        /** card type **/
        type?: 'creature' | 'spell' | 'weapon';
        /** card tribe type **/
        tribe?: 'nether' | 'aether' | 'atlantean' | 'viking' | 'olympian' | 'anubian' | 'amazon';
        /** card mana range **/
        mana?: string;
        /** card attack range **/
        attack?: string;
        /** card health range **/
        health?: string;
    }): CancelablePromise<PrototypeCardList>;
    /**
     * Get proto by id
     * Returns the prototype card with id
     * @returns PrototypeCard OK
     * @throws ApiError
     */
    static getProto({ id, }: {
        /** id of the prototype card **/
        id: string;
    }): CancelablePromise<PrototypeCard>;
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
    /**
     * Get rarity information on protos
     * Returns rarity information about protos
     * @returns Rarity OK
     * @throws ApiError
     */
    static listRarity({ page, perPage, sort, order, user, rarity, quality, god, type, tribe, purity, mana, health, attack, proto, }: {
        /** page number **/
        page?: number;
        /** number of items per page to return **/
        perPage?: number;
        sort?: 'proto' | 'plain' | 'shadow' | 'gold' | 'diamond';
        order?: 'asc' | 'desc';
        /** get rarity info about cards owned by a specific address **/
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
    }): CancelablePromise<Rarity>;
}
