/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Referral } from './Referral';

export type ReferralList = {
    total: number;
    page: number;
    perPage: number;
    records: Array<Referral>;
};
