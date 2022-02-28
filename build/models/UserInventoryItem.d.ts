export declare type UserInventoryItem = {
    name: string;
    mana: number;
    health: {
        Int64: number;
        Valid: boolean;
    };
    attack: {
        Int64: number;
        Valid: boolean;
    };
    tribe: {
        String: string;
        Valid: boolean;
    };
    rarity: string;
    type: string;
    god: string;
    effect: string;
    user: string;
    id: {
        Int64: number;
        Valid: boolean;
    };
    proto: number;
    purity: number;
    opened: boolean;
    set: {
        String: string;
        Valid: boolean;
    };
};
