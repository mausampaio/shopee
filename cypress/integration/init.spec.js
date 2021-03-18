describe('Cypress', () => {
  it('Contains "Bem-vindo!" on the main page', () => {
    cy.visit('/');
    cy.contains('Bem-vindo!').should('exist');
  });

  it('buyButton increment on first click', () => {
    cy.get('.cXUeuh').first().find('button').click();

    cy.get('.cXUeuh').first().find('.cnBCFf').find('span').should('contain', '1');
  });

  it('Product increment on click incrementButton', () => {
    cy.get('.cXUeuh').first().find('.cnBCFf').find('button').contains('+').click();

    cy.get('.cXUeuh').first().find('.cnBCFf').find('span').should('contain', '2');
  });

  it('Cart badge appears on buyButton click', () => {
    cy.visit('/');
    cy.get('.cXUeuh').first().find('button').click();

    cy.get('.jdktTm span').should('contain', '1');
  });

  it('Cart badge increment on buyButton click', () => {
    cy.get('.cXUeuh').eq(1).find('button').click();

    cy.get('.jdktTm span').should('contain', '2');
  });

  it('Navigate to cartPage on cartButton click', () => {
    cy.get('.hBzCsE > button').click();

    cy.get('.kUGRTy h2').should('not.contain', 'Não existem produtos');
  });

  it('Product increment on cartPage incrementButton click', () => {
    cy.get('.cnBCFf').find('button').contains('+').click();

    cy.get('.cnBCFf').find('span').should('contain', '2');
  });

  it('Product decrement on cartPage decrementButton click', () => {
    cy.get('.cnBCFf').find('button').contains('-').click();

    cy.get('.cnBCFf').find('span').should('contain', '1');
  });

  it('Delete product on decrement click', () => {
    cy.get('.htjwl div h2 a').first().should('contain', 'Duracell - AAA Batteries (4-Pack)');

    cy.get('.cnBCFf').find('button').find('svg').first().click();

    cy.get('.htjwl div h2 a').first().should('not.contain', 'Duracell - AAA Batteries (4-Pack)');
  });

  it('Checkout cart', () => {
    cy.get('.cijXJu').contains('Finalizar Compra').click();

    cy.get('.Toastify .Toastify__toast-body').should('contain', 'A compra foi processada com sucesso, Obrigado!');
  });

  it('Filter products by search form', () => {
    cy.visit('/');
    cy.get('input').type('Duracell');

    cy.get('button').first().click();

    cy.get('.hUxUku h2').should('not.exist');
  });

  it('Navigate to ProductDetails page', () => {
    cy.visit('/');
    cy.get('.cXUeuh').first().find('a').first().click();

    cy.contains('Duracell - AAA Batteries (4-Pack)').should('exist');
  });

  it('Navigate to List page on backButton click', () => {
    cy.get('.cijXJu').contains('Voltar').click();

    cy.contains('Bem-vindo!').should('exist');
  });
})