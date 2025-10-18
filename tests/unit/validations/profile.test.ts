import { describe, it, expect } from "vitest"
import { profileSchema } from "@/lib/validations/profile"

describe("Profile Validations", () => {
  it("validates correct profile data", () => {
    const validData = {
      display_name: "John Doe",
      bio: "Test bio",
      date_of_birth: "1990-01-01",
      gender: "male",
      height_cm: 170,
      weight_kg: 70,
    }

    const result = profileSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it("rejects short display name", () => {
    const invalidData = {
      display_name: "J",
    }

    const result = profileSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it("rejects long display name", () => {
    const invalidData = {
      display_name: "a".repeat(51),
    }

    const result = profileSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it("rejects long bio", () => {
    const invalidData = {
      bio: "a".repeat(501),
    }

    const result = profileSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it("rejects invalid height", () => {
    const invalidData = {
      height_cm: 30,
    }

    const result = profileSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it("rejects invalid weight", () => {
    const invalidData = {
      weight_kg: 10,
    }

    const result = profileSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it("accepts optional fields", () => {
    const validData = {}

    const result = profileSchema.safeParse(validData)
    expect(result.success).toBe(true)
  })
})
