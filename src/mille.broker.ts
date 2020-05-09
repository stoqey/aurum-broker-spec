/* eslint-disable @typescript-eslint/no-unused-vars */
import { Broker, BrokerMethods } from "./Broker";
import { isTest } from "./config";

export class MilleBroker extends Broker implements BrokerMethods {

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
    getAccountSummary: () => Promise<import("./interfaces").BrokerAccountSummary>;
    getOpenOrders: <T>() => Promise<import("./interfaces").OpenOrder & T[]>;
    getAllPositions: <T>() => Promise<import("./interfaces").Portfolio & T[]>;
    enterPosition: <T>(portfolio: import("./interfaces").Portfolio & T) => Promise<import("./interfaces").Portfolio & T>;
    exitPosition: <T>(portfolio: import("./interfaces").Portfolio & T) => Promise<import("./interfaces").Portfolio & T>;
    searchSymbol: <T>(args: import("./interfaces").SI & T) => Promise<import("./interfaces").SI & T[]>;
    quoteSymbol: <T>(args: import("./interfaces").SI & T) => Promise<import("./interfaces").SI & T>;
    getMarketData: <T>(args: import("./interfaces").GetSymbolData & T) => Promise<any>;
    getPriceUpdate: <T>(args: import("./interfaces").GetSymbolData & T) => Promise<any>;
}