import { render, screen } from '@testing-library/react'
import Features from '@/components/Features'
import { describe, it, expect } from 'vitest'

describe('Features Component', () => {
  it('renders section headers', () => {
    render(<Features />)
    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('A better way to manage money')).toBeInTheDocument()
  })

  it('renders all feature items', () => {
    render(<Features />)
    expect(screen.getByText('Visual Spending')).toBeInTheDocument()
    expect(screen.getByText('Goal Tracking')).toBeInTheDocument()
    expect(screen.getByText('AI Insights')).toBeInTheDocument()
    expect(screen.getByText('Bank-Level Security')).toBeInTheDocument()
  })
})
