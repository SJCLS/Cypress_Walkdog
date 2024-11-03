describe('Home', () => {
    it('Validar textos, titulo, url e ir para cadastro ', () => {
      cy.visit('https://walkdog.vercel.app');
      cy.title().should('include', 'Walkdog by Papito');
      cy.get('h1').should('have.text','Cuidado e diversão em cada passo')
      cy.get('.content main p').should('have.text','Quer gerar uma renda extra passeando com pets? Faça parte da nossa comunidade de dog walkers.')
      cy.get('a[href="/signup"]').click();
      cy.url().should('include','https://walkdog.vercel.app/signup')
    });
  });
  