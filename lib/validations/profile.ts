import { z } from "zod"

export const profileSchema = z.object({
  display_name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .optional(),
  bio: z.string().max(500, "Bio must be less than 500 characters").optional(),
  date_of_birth: z.string().optional(),
  gender: z.enum(["male", "female", "other", "prefer_not_to_say"]).optional(),
  height_cm: z.number().min(50, "Height must be at least 50cm").max(300, "Height must be less than 300cm").optional(),
  weight_kg: z.number().min(20, "Weight must be at least 20kg").max(500, "Weight must be less than 500kg").optional(),
})

export type ProfileInput = z.infer<typeof profileSchema>
