describe('cadastro', () => {
    it('cadastrar um walkdog', () => {
      cy.visit('/signup');
      cy.get(':nth-child(3) > :nth-child(2) > .field > input').type('Maria Luisa');
      cy.get(':nth-child(3) > :nth-child(1) > input').type('maluzinha@qualquer.com');
      cy.get(':nth-child(3) > :nth-child(2) > input').type('12264641502');
      cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > input').type('60850-570');
      cy.get(':nth-child(2) > :nth-child(2) > input').click();
      cy.get(':nth-child(4) > :nth-child(1) > input').type('22');
      cy.get(':nth-child(4) > :nth-child(2) > input').type(' Lote 47 Quadra 145');
      cy.get('.walker-service > :nth-child(1)').click();
      cy.get('.walker-service > :nth-child(2)').click();
      cy.get('.dropzone > input').attachFile('image.png');
      cy.get('.button-register').click();
    });

    it('Não deve cadastrar um walkdog com cpf inválido', () => {
      cy.visit('/signup');
      cy.get(':nth-child(3) > :nth-child(2) > .field > input').type('Maria Luisa');
      cy.get(':nth-child(3) > :nth-child(1) > input').type('maluzinha@qualquer.com');
      cy.get(':nth-child(3) > :nth-child(2) > input').type('122646kk502');
      cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > input').type('60850-570');
      cy.get(':nth-child(2) > :nth-child(2) > input').click();
      cy.get(':nth-child(4) > :nth-child(1) > input').type('22');
      cy.get(':nth-child(4) > :nth-child(2) > input').type(' Lote 47 Quadra 145');
      cy.get('.walker-service > :nth-child(1)').click();
      cy.get('.walker-service > :nth-child(2)').click();
      cy.get('.dropzone > input').attachFile('image.png');
      cy.get('.button-register').click();
      cy.get('.alert-error').should('have.text','CPF inválido')
    });

    it('Não deve cadastrar um walkdog sem os campos obrigatórios', () => {
      cy.visit('/signup');
      cy.get('.button-register').click();
      cy.get(':nth-child(3) > :nth-child(1) > .alert-error').should('have.text','Informe o seu melhor email')
      cy.get(':nth-child(3) > :nth-child(2) > .alert-error').should('have.text','Informe o seu CPF')
      cy.get(':nth-child(4) > :nth-child(1) > .alert-error').should('have.text','Informe um número maior que zero')
      cy.get('form > :nth-child(7)').should('have.text','Adcione um documento com foto (RG ou CHN)')
    });

    it('Não deve cadastrar um walkdog com espaços nos campos', () => {
      cy.visit('/signup');
      cy.get(':nth-child(3) > :nth-child(2) > .field > input').type('  ');
      cy.get(':nth-child(3) > :nth-child(1) > input').type('  ');
      cy.get(':nth-child(3) > :nth-child(2) > input').type('  ');
      cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > input').type('  ');
      cy.get(':nth-child(2) > :nth-child(2) > input').click();
      cy.get(':nth-child(4) > :nth-child(1) > input').type('  ');
      cy.get(':nth-child(4) > :nth-child(2) > input').type('  ');
      cy.get('.walker-service > :nth-child(1)').click();
      cy.get('.walker-service > :nth-child(2)').click();
      cy.get('.dropzone > input').attachFile('image');
      cy.get('.button-register').click();
      cy.get(':nth-child(3) > :nth-child(2) > .alert-error').should('have.text','CPF inválido')
      cy.get(':nth-child(4) > :nth-child(1) > .alert-error').should('have.text','Informe um número maior que zero')
      cy.get('form > :nth-child(7)').should('have.text','Adcione um documento com foto (RG ou CHN)')
    });

});