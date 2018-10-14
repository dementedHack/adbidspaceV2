import { MyAdsModule } from './my-ads.module';

describe('BlankPageModule', () => {
    let myAdsModule: MyAdsModule;

    beforeEach(() => {
        myAdsModule = new MyAdsModule();
    });

    it('should create an instance', () => {
        expect(myAdsModule).toBeTruthy();
    });
});
