import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'
import { describe, it, expect } from 'vitest'

describe('Footer Component', () => {
  it('renders footer headings', () => {
    render(<Footer />)
    expect(screen.getByText('Product')).toBeInTheDocument()
    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByText('Resources')).toBeInTheDocument()
    expect(screen.getByText('Legal')).toBeInTheDocument()
  })

  it('renders copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/2023 My Money Journey\. All rights reserved\./i)).toBeInTheDocument()
  })
})
