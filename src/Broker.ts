import { BrokerAccountSummary, GetSymbolData, Portfolio, SI, OpenOrder } from './interfaces';

export interface BrokerMethods {
    // Account details
    getAccountSummary: () => Promise<BrokerAccountSummary>;

    // Orders
    getOpenOrders: <T>() => Promise<OpenOrder & T[]>;

    // Positions
    getAllPositions: <T>() => Promise<Portfolio & T[]>;
    enterPosition: <T>(portfolio: Portfolio & T) => Promise<Portfolio & T>;
    exitPosition: <T>(portfolio: Portfolio & T) => Promise<Portfolio & T>;

    // Symbol
    searchSymbol: <T>(args: SI & T) => Promise<SI & T[]>;
    quoteSymbol: <T>(args: SI & T) => Promise<SI & T>;

    // MarketData
    getMarketData: <T>(args: GetSymbolData & T) => Promise<any>;
    getPriceUpdate: <T>(args: GetSymbolData & T) => Promise<any>;

}

export interface BrokerEvents {
    // onReady
    onReady: (started: boolean) => Promise<any>;

    // portfolios
    onPortfolios: (portfolios: any) => Promise<any>;

    // order for buy/sell trades
    onOrders: (orders: any) => Promise<any>;

    // symbol historical data
    onMarketData: (data: any) => Promise<any>;

    // onPriceUpdates
    onPriceUpdate: (data: any) => Promise<any>;
}

export type BrokerEventTypes = keyof BrokerEvents;

export class Broker {

    events: BrokerEvents = {} as any;

    constructor() {
    }

    public when(event: BrokerEventTypes, response: (data: any) => Promise<any | void | null>): void {
        this.events[event] = response;
    }
}

export default Broker;