import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { MetricsOverview } from "@/components/features/dashboard/metrics-overview"
import { mockHealthMetrics } from "../utils/test-helpers"

describe("MetricsOverview", () => {
  it("renders metrics overview title", () => {
    render(<MetricsOverview metrics={mockHealthMetrics} />)

    expect(screen.getByText("Your Metrics")).toBeInTheDocument()
  })

  it("displays average weight", () => {
    render(<MetricsOverview metrics={mockHealthMetrics} />)

    // Average of 70.5 and 71 = 70.8
    expect(screen.getByText("70.8 kg")).toBeInTheDocument()
  })

  it("displays average steps", () => {
    render(<MetricsOverview metrics={mockHealthMetrics} />)

    // Average of 10000 and 8000 = 9000
    expect(screen.getByText("9,000")).toBeInTheDocument()
  })

  it("displays average sleep", () => {
    render(<MetricsOverview metrics={mockHealthMetrics} />)

    // Average of 7.5 and 7 = 7.2
    expect(screen.getByText("7.2 hrs")).toBeInTheDocument()
  })

  it("shows empty state when no metrics", () => {
    render(<MetricsOverview metrics={[]} />)

    // Should show dashes for empty metrics
    const dashes = screen.getAllByText("—")
    expect(dashes.length).toBeGreaterThan(0)
  })
})
