import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
<<<<<<< HEAD
    expect(page.getParagraphText()).toEqual('Welcome to ramo-app!');
=======
    expect(page.getParagraphText()).toEqual('Welcome to ramo!');
>>>>>>> af4c2db843e34a328ab3236ce1b09875ee89c7ca
  });
});
