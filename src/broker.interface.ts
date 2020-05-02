export interface BrokerEvents {
    // portfolios
    onPortfolios: (portfolios: any[]) => Promise<any>;
    onTrade: (trade: any) => Promise<any>

    // symbols
    onMarketData: (data: any) => Promise<any>;

    // onPriceUpdates
    onPriceUpdate: (data: any) => Promise<any>;
}

export type BROKEREVENTS = keyof BrokerEvents;

export interface BrokerMethods {
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
export class Broker implements BrokerMethods {

    events: BrokerEvents = {} as any;

    constructor() {
    }

    /**
     * subscribe
     */
    public sub(event: BROKEREVENTS, response: (data: any) => Promise<any | void | null>): void {
        this.events[event] = response;
    }
}