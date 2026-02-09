import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'
import { describe, it, expect } from 'vitest'

describe('Hero Component', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(/Take Control of/i)
    expect(heading).toHaveTextContent(/Your Financial Journey/i)
  })

  it('renders call to action buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Start Free Trial')).toBeInTheDocument()
    expect(screen.getByText('See Demo')).toBeInTheDocument()
  })
})
