import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import { DashboardHeader } from "@/components/features/dashboard/dashboard-header"
import { ThemeProvider } from "@/components/shared/theme-provider"

// Mock next/navigation
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    refresh: vi.fn(),
  }),
}))

describe("DashboardHeader", () => {
  it("renders with user name", () => {
    render(
      <ThemeProvider>
        <DashboardHeader userName="John" />
      </ThemeProvider>,
    )

    expect(screen.getByText(/Welcome back, John!/i)).toBeInTheDocument()
  })

  it("renders app name", () => {
    render(
      <ThemeProvider>
        <DashboardHeader userName="John" />
      </ThemeProvider>,
    )

    expect(screen.getByText("Fit by Dyrane")).toBeInTheDocument()
  })

  it("renders settings link", () => {
    render(
      <ThemeProvider>
        <DashboardHeader userName="John" />
      </ThemeProvider>,
    )

    const settingsLink = screen.getByRole("link", { name: /settings/i })
    expect(settingsLink).toBeInTheDocument()
    expect(settingsLink).toHaveAttribute("href", "/settings")
  })

  it("renders sign out button", () => {
    render(
      <ThemeProvider>
        <DashboardHeader userName="John" />
      </ThemeProvider>,
    )

    expect(screen.getByRole("button", { name: /sign out/i })).toBeInTheDocument()
  })
})
