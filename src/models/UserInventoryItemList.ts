/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserInventoryItem } from './UserInventoryItem';

export type UserInventoryItemList = {
    total: number;
    page: number;
    perPage: number;
    records: Array<UserInventoryItem>;
};
