import { render, screen } from '@testing-library/react'
import CTA from '@/components/CTA'
import { describe, it, expect } from 'vitest'

describe('CTA Component', () => {
  it('renders the main call to action text', () => {
    render(<CTA />)
    expect(screen.getByText(/Ready to take control of your finances\?/i)).toBeInTheDocument()
    expect(screen.getByText(/Start your free trial today\./i)).toBeInTheDocument()
  })

  it('renders the action buttons', () => {
    render(<CTA />)
    expect(screen.getByText('Get started')).toBeInTheDocument()
    expect(screen.getByText('Learn more')).toBeInTheDocument()
  })
})
