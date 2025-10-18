import { describe, it, expect } from "vitest"
import { formatDate, formatRelativeTime } from "@/lib/utils/format-date"

describe("formatDate", () => {
  it("formats date with default format", () => {
    const date = new Date("2025-01-15T12:00:00Z")
    expect(formatDate(date)).toBe("Jan 15, 2025")
  })

  it("formats date with custom format", () => {
    const date = new Date("2025-01-15T12:00:00Z")
    expect(formatDate(date, "yyyy-MM-dd")).toBe("2025-01-15")
  })

  it("handles string dates", () => {
    expect(formatDate("2025-01-15")).toBe("Jan 15, 2025")
  })
})

describe("formatRelativeTime", () => {
  it("formats relative time", () => {
    const date = new Date(Date.now() - 1000 * 60 * 5) // 5 minutes ago
    const result = formatRelativeTime(date)
    expect(result).toContain("minute")
    expect(result).toContain("ago")
  })
})
