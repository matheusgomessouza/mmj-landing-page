import { render, screen } from '@testing-library/react'
import Testimonials from '@/components/Testimonials'
import { describe, it, expect } from 'vitest'

describe('Testimonials Component', () => {
  it('renders section headers', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText('What our users say')).toBeInTheDocument()
  })

  it('renders author names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('David Wilson')).toBeInTheDocument()
  })
})
