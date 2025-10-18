import { describe, it, expect } from "vitest"
import { signUpSchema, loginSchema } from "@/lib/validations/auth"

describe("Auth Validations", () => {
  describe("signUpSchema", () => {
    it("validates correct signup data", () => {
      const validData = {
        email: "test@example.com",
        password: "Password123",
        confirmPassword: "Password123",
      }

      const result = signUpSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it("rejects invalid email", () => {
      const invalidData = {
        email: "invalid-email",
        password: "Password123",
        confirmPassword: "Password123",
      }

      const result = signUpSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it("rejects short password", () => {
      const invalidData = {
        email: "test@example.com",
        password: "Pass1",
        confirmPassword: "Pass1",
      }

      const result = signUpSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it("rejects password without uppercase", () => {
      const invalidData = {
        email: "test@example.com",
        password: "password123",
        confirmPassword: "password123",
      }

      const result = signUpSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it("rejects password without lowercase", () => {
      const invalidData = {
        email: "test@example.com",
        password: "PASSWORD123",
        confirmPassword: "PASSWORD123",
      }

      const result = signUpSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it("rejects password without number", () => {
      const invalidData = {
        email: "test@example.com",
        password: "Password",
        confirmPassword: "Password",
      }

      const result = signUpSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it("rejects mismatched passwords", () => {
      const invalidData = {
        email: "test@example.com",
        password: "Password123",
        confirmPassword: "Password456",
      }

      const result = signUpSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })
  })

  describe("loginSchema", () => {
    it("validates correct login data", () => {
      const validData = {
        email: "test@example.com",
        password: "password",
      }

      const result = loginSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it("rejects invalid email", () => {
      const invalidData = {
        email: "invalid-email",
        password: "password",
      }

      const result = loginSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })

    it("rejects empty password", () => {
      const invalidData = {
        email: "test@example.com",
        password: "",
      }

      const result = loginSchema.safeParse(invalidData)
      expect(result.success).toBe(false)
    })
  })
})
