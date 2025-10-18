import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { GoalsProgress } from "@/components/features/dashboard/goals-progress"
import { mockGoals } from "../utils/test-helpers"

describe("GoalsProgress", () => {
  it("renders goals progress title", () => {
    render(<GoalsProgress goals={mockGoals} />)

    expect(screen.getByText("Your Goals")).toBeInTheDocument()
  })

  it("displays all goals", () => {
    render(<GoalsProgress goals={mockGoals} />)

    expect(screen.getByText("weight")).toBeInTheDocument()
    expect(screen.getByText("fitness")).toBeInTheDocument()
  })

  it("displays goal targets", () => {
    render(<GoalsProgress goals={mockGoals} />)

    expect(screen.getByText("Target: 65 kg")).toBeInTheDocument()
    expect(screen.getByText("Target: 10000 steps")).toBeInTheDocument()
  })

  it("shows progress bars", () => {
    render(<GoalsProgress goals={mockGoals} />)

    const progressBars = screen.getAllByRole("progressbar")
    expect(progressBars).toHaveLength(2)
  })
})
