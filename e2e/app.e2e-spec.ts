import { Ng4d3vizPage } from './app.po';

describe('ng4d3viz App', () => {
  let page: Ng4d3vizPage;

  beforeEach(() => {
    page = new Ng4d3vizPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
