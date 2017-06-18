import { MeanQuickstarterPage } from './app.po';

describe('mean-quickstarter App', () => {
  let page: MeanQuickstarterPage;

  beforeEach(() => {
    page = new MeanQuickstarterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
