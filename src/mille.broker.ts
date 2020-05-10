/* eslint-disable @typescript-eslint/no-unused-vars */
import Broker from "./Broker";
import { BrokerAccountSummary, GetSymbolData, Portfolio, SymbolInfo, OpenOrder } from './interfaces';

import { isTest } from "./config";

export class MilleBroker extends Broker {
    public getAllPositions<T>(): Promise<Portfolio & T[]> {
        throw new Error("Method not implemented.");
    }
    public enterPosition<T>(portfolio: Portfolio & T): Promise<Portfolio & T> {
        throw new Error("Method not implemented.");
    }
    public exitPosition<T>(portfolio: Portfolio & T): Promise<Portfolio & T> {
        throw new Error("Method not implemented.");
    }
    public searchSymbol<T>(args: SymbolInfo & T): Promise<SymbolInfo & T[]> {
        throw new Error("Method not implemented.");
    }
    public quoteSymbol<T>(args: SymbolInfo & T): Promise<SymbolInfo & T> {
        throw new Error("Method not implemented.");
    }
    public getMarketData<T>(args: GetSymbolData & T): Promise<any> {
        throw new Error("Method not implemented.");
    }
    public getPriceUpdate<T>(args: GetSymbolData & T): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public getAccountSummary(): Promise<BrokerAccountSummary> {
        throw new Error("Method not implemented.");
    }
    public getOpenOrders<T>(): Promise<OpenOrder & T[]> {
        throw new Error("Method not implemented.");
    }

    // events = {} as any;

    constructor() {
        super();

        if (isTest) {
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const self = this;
            setInterval(() => {
                const onOrders = self.events["onOrders"];
                onOrders([{
                    filled: 0,
                    remaining: 0,
                    avgFillPrice: 0,
                    lastFillPrice: 0
                }]);

            }, 1000)
        }

    }




}