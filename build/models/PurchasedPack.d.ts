export declare type PurchasedPack = {
    purchaseid: number;
    purchaseindex: number;
    purchaseindices: Array<number>;
    user: string;
    factory: string;
    opened: boolean;
    cards: Array<{
        proto: number;
        purity: number;
    }>;
    type: string;
};
