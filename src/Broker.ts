import { BrokerAccountSummary } from './interfaces';
export interface BrokerEvents {
    // onReady
    onReady: (data: any) => Promise<any>;

    // portfolios
    onPortfolios: (portfolios: any[]) => Promise<any>;

    // order for buy/sell trades
    onOrder: (order: any) => Promise<any>;

    // symbol historical data
    onMarketData: (data: any) => Promise<any>;

    // onPriceUpdates
    onPriceUpdate: (data: any) => Promise<any>;
}

export type BrokerEventTypes = keyof BrokerEvents;

export interface BrokerMethods {
    // Account details
    getAccountSummary: () => Promise<BrokerAccountSummary>;

    // Orders
    getAllOrders: () => Promise<any>;
    getOpenOrders: () => Promise<any>;

    // Portfolio
    getAllPositions: () => Promise<any>;
    enterPosition: (portfolio: any[]) => Promise<any | null>;
    exitPosition: (portfolio: any[]) => Promise<any | null>;

    // Symbol
    searchSymbol: (symbol: string, symbolType: string) => Promise<any | null>;
    quoteSymbol: (symbol: string, symbolType: string) => Promise<any | null>;
    getMarketData: (symbol: string, symbolType: string) => Promise<any | null>;
    getPriceUpdate: (symbol: string, symbolType: string) => Promise<any | null>;
}

// @ts-ignore
export class Broker {

    events: BrokerEvents = {} as any;

    constructor() {
    }

    public when(event: BrokerEventTypes, response: (data: any) => Promise<any | void | null>): void {
        this.events[event] = response;
    }
}

export default Broker;