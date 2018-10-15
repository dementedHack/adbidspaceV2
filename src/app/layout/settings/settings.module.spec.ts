import { SettingsModule } from './grid.module';

describe('GridModule', () => {
  let settingsModule: SettingsModule;

  beforeEach(() => {
    settingsModule = new SettingsModule();
  });

  it('should create an instance', () => {
    expect(settingsModule).toBeTruthy();
  });
});
