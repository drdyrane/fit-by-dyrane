import { describe, it, expect, vi } from "vitest"
import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { OnboardingFlow } from "@/components/features/onboarding/onboarding-flow"

// Mock server actions
vi.mock("@/app/actions/onboarding", () => ({
  updateOnboardingProgress: vi.fn().mockResolvedValue({ success: true }),
  createUserGoal: vi.fn().mockResolvedValue({ success: true }),
  updateProfile: vi.fn().mockResolvedValue({ success: true }),
  completeOnboarding: vi.fn().mockResolvedValue({ success: true }),
}))

describe("Onboarding Flow", () => {
  it("renders welcome step initially", () => {
    render(<OnboardingFlow initialStep={0} />)

    expect(screen.getByText("Welcome to Fit by Dyrane")).toBeInTheDocument()
  })

  it("shows progress indicator", () => {
    render(<OnboardingFlow initialStep={0} />)

    expect(screen.getByText("Step 1 of 4")).toBeInTheDocument()
  })

  it("navigates to next step on button click", async () => {
    render(<OnboardingFlow initialStep={0} />)

    const getStartedButton = screen.getByRole("button", { name: /get started/i })
    fireEvent.click(getStartedButton)

    await waitFor(() => {
      expect(screen.getByText("What are your wellness goals?")).toBeInTheDocument()
    })
  })

  it("allows selecting multiple goals", async () => {
    render(<OnboardingFlow initialStep={1} />)

    const weightGoal = screen.getByText("Manage Weight").closest("div")
    const fitnessGoal = screen.getByText("Improve Fitness").closest("div")

    if (weightGoal) fireEvent.click(weightGoal)
    if (fitnessGoal) fireEvent.click(fitnessGoal)

    const continueButton = screen.getByRole("button", { name: /continue/i })
    expect(continueButton).not.toBeDisabled()
  })
})
