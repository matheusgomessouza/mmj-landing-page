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

  it('validates critical links', () => {
    // Get Started link
    cy.get('a').contains('Get Started').should('have.attr', 'href', 'https://mmjourney.vercel.app/signup')
    // Log in link (desktop)
    cy.get('a.hidden').contains('Log in').should('have.attr', 'href', 'https://mmjourney.vercel.app/')
  })

  context('Mobile View', () => {
    beforeEach(() => {
      cy.viewport('iphone-x')
    })

    it('toggles mobile menu', () => {
      // Menu should be hidden initially
      cy.get('.md\\:hidden.bg-white.shadow-lg').should('not.exist')
      
      // Click hamburger
      cy.get('button[aria-label="Open mobile menu"]').click()
      
      // Menu should now be visible
      cy.get('.md\\:hidden.bg-white.shadow-lg').should('be.visible')
      cy.get('.md\\:hidden.bg-white.shadow-lg').contains('Features').should('be.visible')
      cy.get('.md\\:hidden.bg-white.shadow-lg').contains('Log in').should('be.visible')
    })
  })
})
