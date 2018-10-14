import { RealEstateModule } from './grid.module';

describe('GridModule', () => {
  let realEstateModule: RealEstateModule;

  beforeEach(() => {
    realEstateModule = new RealEstateModule();
  });

  it('should create an instance', () => {
    expect(realEstateModule).toBeTruthy();
  });
});
