import { render, screen } from '@testing-library/react'
import Stats from '@/components/Stats'
import { describe, it, expect } from 'vitest'

describe('Stats Component', () => {
  it('renders stats headings', () => {
    render(<Stats />)
    expect(screen.getByText('Trusted by thousands')).toBeInTheDocument()
    expect(screen.getByText('Our users love My Money Journey')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<Stats />)
    expect(screen.getByText('Customer satisfaction')).toBeInTheDocument()
    expect(screen.getByText('Active users')).toBeInTheDocument()
    expect(screen.getByText('Assets managed')).toBeInTheDocument()
    expect(screen.getByText('App Store rating')).toBeInTheDocument()
  })
})
