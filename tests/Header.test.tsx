import { render, screen, fireEvent } from '@testing-library/react'
import Header from '@/components/Header'
import { describe, it, expect } from 'vitest'

describe('Header Component', () => {
  it('renders the logo and main brand name', () => {
    render(<Header />)
    expect(screen.getByText('My Money Journey')).toBeInTheDocument()
  })

  it('renders desktop navigation links', () => {
    render(<Header />)
    const links = ['Features', 'Pricing', 'Resources', 'About']
    links.forEach(link => {
      // getByText might return multiple if mobile menu is open, but hidden desktop menu is always rendered
      const elements = screen.getAllByText(link)
      expect(elements.length).toBeGreaterThan(0)
    })
  })

  it('renders the Get Started button', () => {
    render(<Header />)
    expect(screen.getByText('Get Started')).toBeInTheDocument()
    expect(screen.getByText('Log in')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', () => {
    render(<Header />)
    const button = screen.getByRole('button', { name: /open mobile menu/i })
    fireEvent.click(button)
    // After clicking, mobile links should become visible (or at least rendered in DOM)
    const featuresLinks = screen.getAllByText('Features')
    // One for desktop, one for mobile
    expect(featuresLinks.length).toBeGreaterThanOrEqual(2)
  })
})
