import { AdsModule } from './grid.module';

describe('GridModule', () => {
  let adModule: AdsModule;

  beforeEach(() => {
    adsModule = new AdsModule();
  });

  it('should create an instance', () => {
    expect(adModule).toBeTruthy();
  });
});
