// export default namespace Broker
export type BrokerAccountSummary = {
    accountId: string,
    totalCashValue: number
} & { [x: string]: any };

/**
 * SI
 * Symbol Info
 */
export interface SymbolInfo {
    symbol: string;
    symbolType?: string;
}

export interface GetSymbolData extends SymbolInfo {
    startDate?: Date;
    endDate?: Date;
    [x: string]: any;
}

export interface MosaicData extends SymbolInfo {
    [x: string]: any;
}

export interface Portfolio extends SymbolInfo {
    position: number;
    averageCost: number;
    marketPrice: number;
    [x: string]: any;
}

export interface OpenOrder extends SymbolInfo {
    // status,
    filled: number;
    remaining: number;
    avgFillPrice: number;
    lastFillPrice?: number;
    [x: string]: any;
}