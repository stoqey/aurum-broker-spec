export type BrokerAccountSummary = {
    accountId: string,
    totalCashValue: number
} & { [x: string]: any };

/**
 * SI
 * Symbol Info
 */
interface SI {
    symbol: string;
    symbolType?: string;
}
export interface GetMarketData extends SI {
    startDate: Date;
    endDate?: Date;
    [x: string]: any;
}

export interface Portfolio extends SI {
    position: number;
    costPrice: number;
    marketPrice: number;
    [x: string]: any;
}