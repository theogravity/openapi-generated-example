/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Purchase } from './Purchase';

export type PurchaseList = {
    total: number;
    page: number;
    perPage: number;
    records: Array<Purchase>;
};
