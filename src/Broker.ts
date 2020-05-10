import { BrokerAccountSummary, GetSymbolData, Portfolio, SymbolInfo, OpenOrder } from './interfaces';

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

export abstract class Broker {

    events: BrokerEvents = {} as any;

    constructor() {
    }
    public abstract getAccountSummary(): Promise<BrokerAccountSummary>;
    public abstract getOpenOrders<T>(): Promise<OpenOrder & T[]>;
    public abstract getAllPositions<T>(): Promise<Portfolio & T[]>;
    public abstract enterPosition<T>(portfolio: Portfolio & T): Promise<Portfolio & T>;
    public abstract exitPosition<T>(portfolio: Portfolio & T): Promise<Portfolio & T>;
    public abstract searchSymbol<T>(args: SymbolInfo & T): Promise<SymbolInfo & T[]>;
    public abstract quoteSymbol<T>(args: SymbolInfo & T): Promise<SymbolInfo & T>;
    public abstract getMarketData<T>(args: GetSymbolData & T): Promise<any>;
    public abstract getPriceUpdate<T>(args: GetSymbolData & T): Promise<any>;

    public when(event: BrokerEventTypes, response: (data: any) => Promise<any | void | null>): void {
        this.events[event] = response;
    }
}

export default Broker;