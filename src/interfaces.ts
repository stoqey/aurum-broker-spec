// export default namespace Broker
export type BrokerAccountSummary = {
  accountId: string;
  totalCashValue: number;
} & { [x: string]: any };

/**
 * SI
 * Symbol Info
 */
export interface Contract {
  symbol: string;
  symbolType?: string;
  [x: string]: any;
}

export interface GetSymbolData extends Contract {
  startDate?: Date;
  endDate?: Date;
  [x: string]: any;
}

export interface MosaicData extends Contract {
  [x: string]: any;
}

export interface Portfolio extends Contract {
  position: number;
  averageCost: number;
  marketPrice: number;
  [x: string]: any;
}

export interface OpenOrder extends Contract {
  // status,
  filled: number;
  remaining: number;
  avgFillPrice: number;
  lastFillPrice?: number;
  [x: string]: any;
}
