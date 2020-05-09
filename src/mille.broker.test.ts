import 'mocha';
import { MilleBroker } from './mille.broker';

const milleBroker = new MilleBroker();

describe('Mille broker demo', () => {

    it(`Fake trade `, (done) => {
        milleBroker.when("onOrder", async (data: any) => {
            console.log('data is', data);
            done();
        });

        // milleBroker.enterPosition({
        //     symbol: "",
        //     position: 0,
        //     costPrice: 0,
        //     marketPrice: 0
        // })
    })

})