import { describe, it, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { ThemeSwitcher } from "@/components/shared/theme-switcher"
import { ThemeProvider } from "@/components/shared/theme-provider"

describe("ThemeSwitcher", () => {
  it("renders theme switcher button", () => {
    render(
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>,
    )

    const button = screen.getByRole("button", { name: /toggle theme/i })
    expect(button).toBeInTheDocument()
  })

  it("opens dropdown menu on click", () => {
    render(
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>,
    )

    const button = screen.getByRole("button", { name: /toggle theme/i })
    fireEvent.click(button)

    expect(screen.getByText("Light")).toBeInTheDocument()
    expect(screen.getByText("Dark")).toBeInTheDocument()
    expect(screen.getByText("System")).toBeInTheDocument()
  })
})
