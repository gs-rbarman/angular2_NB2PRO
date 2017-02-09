import { NgbootPage } from './app.po';

describe('ngboot App', function() {
  let page: NgbootPage;

  beforeEach(() => {
    page = new NgbootPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
