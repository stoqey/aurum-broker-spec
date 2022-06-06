import "mocha";

import { MilleBroker } from "./mille.broker";

const milleBroker = new MilleBroker();

describe("Mille broker demo", () => {
  it(`Fake trade `, (done) => {
    milleBroker.on("onOrders", async (data: any) => {
      console.log("onOrders data is", data);
      done();
    });

    // milleBroker.enterPosition({
    //     symbol: "",
    //     position: 0,
    //     marketPrice: 0,
    //     averageCost: 0
    // })
  });
});
