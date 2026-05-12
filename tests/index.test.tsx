import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import { describe, it, expect, vi } from 'vitest'

// Mock next/dynamic imports
vi.mock('next/dynamic', () => ({
  default: (fn: any) => {
    // If we want to evaluate the dynamic imports instantly for testing
    // However, vitest needs async components handled. 
    // Usually it's easier to just mock the component out, but since we want to test integration:
    return fn
  }
}))

describe('Home Page', () => {
  it('renders the Home page without crashing', async () => {
    // Basic snapshot or render check
    // Given the dynamic imports, we might just mock them for a quick integration test, or wait for them.
    // Let's do a simple render to ensure no immediate crash.
    const { container } = render(<Home />)
    expect(container).toBeInTheDocument()
  })
})
