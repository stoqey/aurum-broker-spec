import {
  BrokerAccountSummary,
  Contract,
  GetSymbolData,
  MosaicData,
  OpenOrder,
  Portfolio,
} from "./interfaces";

import { EventEmitter } from "events";

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
export abstract class Broker extends EventEmitter {
  portfolios: Portfolio[];
  orders: OpenOrder[];

  constructor() {
    super();
  }

  public abstract getAccountSummary(): Promise<BrokerAccountSummary>;
  public abstract getOpenOrders<T>(): Promise<OpenOrder & T[]>;
  public abstract getAllPositions<T>(): Promise<Portfolio & T[]>;
  public abstract enterPosition<T>(
    portfolio: Portfolio & T
  ): Promise<Portfolio & T>;
  public abstract exitPosition<T>(
    portfolio: Portfolio & T
  ): Promise<Portfolio & T>;
  public abstract searchSymbol<T>(args: Contract & T): Promise<Contract & T[]>;
  public abstract quoteSymbol<T>(args: Contract & T): Promise<Contract & T>;
  public abstract getMarketData<T>(args: GetSymbolData & T): Promise<any>;
  public abstract getPriceUpdate<T>(args: GetSymbolData & T): Promise<any>;
  public abstract getScreener(): <T>(args: any) => Promise<MosaicData & T[]>;
}

export default Broker;
