// export default namespace Broker
export type BrokerAccountSummary = {
    accountId: string,
    totalCashValue: number
} & { [x: string]: any };

/**
 * SI
 * Symbol Info
 */
export interface SI {
    symbol: string;
    symbolType?: string;
}
export interface GetSymbolData extends SI {
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