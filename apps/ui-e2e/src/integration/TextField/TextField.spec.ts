describe('ui: TextField component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=textfield--primary&args=value;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to TextField!');
    });
});
