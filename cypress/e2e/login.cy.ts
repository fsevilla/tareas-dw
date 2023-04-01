describe('My Login Page', () => {
  it('Should display an error', () => {
    cy.visit('/')
    cy.get('input[type="email"]').type('lorem');
    cy.get('input[type="password"]').type('lorem');
    cy.get('#submit').click();
    cy.contains('Las credenciales no son correctas')
  })

  it('Should login ', () => {
    cy.visit('/')
    cy.get('input[type="email"]').type('kminchelle');
    cy.get('input[type="password"]').type('0lelplR');
    cy.get('#submit').click();
    cy.contains('Todos Component')
  })
})

