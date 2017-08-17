import { NewUiPage } from './app.po';

describe('new-ui App', () => {
  let page: NewUiPage;

  beforeEach(() => {
    page = new NewUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
