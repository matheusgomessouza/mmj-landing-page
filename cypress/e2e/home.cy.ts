describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('loads successfully', () => {
    cy.contains('My Money Journey')
    cy.get('h1').contains('Your Financial Journey')
  })

  it('displays key sections', () => {
    cy.contains('Financial Freedom')
    cy.contains('Features')
    cy.contains('Trusted by thousands')
    cy.contains('Testimonials')
  })

  it('checks CTA presence', () => {
    cy.contains('Start Free Trial').should('be.visible')
    cy.contains('Get Started').should('be.visible')
  })
})
