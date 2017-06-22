import { GwentTrackerMatchHistoryPage } from './app.po';

describe('gwent-tracker-match-history App', () => {
  let page: GwentTrackerMatchHistoryPage;

  beforeEach(() => {
    page = new GwentTrackerMatchHistoryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
