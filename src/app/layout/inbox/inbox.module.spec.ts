import { InboxModule } from './inbox.module';

describe('inboxModule', () => {
    let inboxModule: InboxModule;

    beforeEach(() => {
        inboxModule = new InboxModule();
    });

    it('should create an instance', () => {
        expect(inboxModule).toBeTruthy();
    });
});
