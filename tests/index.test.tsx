import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import { describe, it, expect, vi } from 'vitest'

// Mock next/dynamic imports
vi.mock('next/dynamic', () => ({
  default: (_fn: any) => {
    // Return a renderable component stub so dynamic() still behaves like
    // Next.js from the caller's perspective during tests.
    return function MockDynamicComponent() {
      return null
    }
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
