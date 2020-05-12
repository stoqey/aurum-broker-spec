<h1 align="center">AURUM BROKER SPEC</h1>

<p align="center">
<img src="./docs/gold_.png"></img>
</p>

<p align="center">
<a href="https://www.npmjs.com/package/@stoqey/aurum-broker-spec">
<img alt="NPM" src="https://img.shields.io/npm/dt/@stoqey/aurum-broker-spec.svg"></img>
</a>

</p>

 


<p align="center">
This is for any one that wants to create a Broker provider for Aurum, you can also use it as a guide when using any aurum-based broker.
</p>

Features:
- Broker events
- Broker methods

### BROKER EVENTS

#### **onReady** 
this method should be called when broker is ready to accept/process requests.

```ts
onReady: (data: any) => Promise<any>;
```

#### onPortfolios
Called when portfolios change/requested, the application developer should save portfolios from this, because there is no guarantee that the broker saved, or worse-case e.g like when disconnected from broker e.t.c
```ts
onPortfolios: (portfolios: any[]) => Promise<any>;
```

#### onOrder
Called when an action has been made on a order, order status  updated, filled, or returned when order lists are requested.

```ts
// order for buy/sell trades
onOrder: (order: any) => Promise<any>;
```

#### onMarketData
Returns historical data from calling `getMarketData` method
```ts
onMarketData: (data: any) => Promise<any>;
```   

#### onPriceUpdate
Streams real-time price updates from any symbols added for watch list
```ts
onPriceUpdate: (data: any) => Promise<any>;
``` 


<!-- TODO add Methods -->