import { render, screen } from '@testing-library/react'
import FinancialFreedom from '@/components/FinancialFreedom'
import { describe, it, expect } from 'vitest'

describe('FinancialFreedom Component', () => {
  it('renders section headers', () => {
    render(<FinancialFreedom />)
    expect(screen.getByText('Financial Freedom')).toBeInTheDocument()
    expect(screen.getByText('Achieve your money goals faster')).toBeInTheDocument()
  })

  it('renders key points', () => {
    render(<FinancialFreedom />)
    expect(screen.getByText('Save More')).toBeInTheDocument()
    expect(screen.getByText('Spend Smarter')).toBeInTheDocument()
    expect(screen.getByText('Grow Wealth')).toBeInTheDocument()
  })
})
