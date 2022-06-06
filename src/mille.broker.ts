/* eslint-disable @typescript-eslint/no-unused-vars */
import Broker, { BrokerEventTypes } from "./Broker";
import {
  BrokerAccountSummary,
  Contract,
  GetSymbolData,
  OpenOrder,
  Portfolio,
} from "./interfaces";

import { isTest } from "./config";

export class MilleBroker extends Broker {
  public getScreener(): <T>(
    args: any
  ) => Promise<import("./interfaces").MosaicData & T[]> {
    throw new Error("Method not implemented.");
  }

  public getAllPositions<T>(): Promise<Portfolio & T[]> {
    throw new Error("Method not implemented.");
  }
  public enterPosition<T>(portfolio: Portfolio & T): Promise<Portfolio & T> {
    throw new Error("Method not implemented.");
  }
  public exitPosition<T>(portfolio: Portfolio & T): Promise<Portfolio & T> {
    throw new Error("Method not implemented.");
  }
  public searchSymbol<T>(args: Contract & T): Promise<Contract & T[]> {
    throw new Error("Method not implemented.");
  }
  public quoteSymbol<T>(args: Contract & T): Promise<Contract & T> {
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
        const order = {
          filled: 0,
          remaining: 0,
          avgFillPrice: 0,
          lastFillPrice: 0,
        };

        self.emit("onOrders", order);
      }, 1000);
    }
  }
}
