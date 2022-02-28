export declare type PrototypeCard = {
    id: number;
    name: string;
    effect: string;
    god: string;
    rarity: string;
    tribe: {
        String: string;
        Valid: boolean;
    };
    mana: number;
    attack: {
        Int64: number;
        Valid: boolean;
    };
    health: {
        Int64: number;
        Valid: boolean;
    };
    type: string;
    set: string;
    collectable: boolean;
    live: string;
    art_id: string;
    lib_id: string;
};
