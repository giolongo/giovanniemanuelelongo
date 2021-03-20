import * as fromNavbar from './navbar.actions';

describe('loadNavbars', () => {
  it('should return an action', () => {
    expect(fromNavbar.loadNavbars().type).toBe('[Navbar] Load Navbars');
  });
});
