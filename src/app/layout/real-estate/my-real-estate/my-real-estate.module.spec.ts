import { MyRealEstateModule } from './my-real-estate.module';

describe('MyRealEstateModule', () => {
    let myRealEstateModule: MyRealEstateModule;

    beforeEach(() => {
        myRealEstateModule = new MyRealEstateModule();
    });

    it('should create an instance', () => {
        expect(myRealEstateModule).toBeTruthy();
    });
});
