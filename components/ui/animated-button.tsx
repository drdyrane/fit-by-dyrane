"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const animatedButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-40 relative overflow-hidden group outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-md hover:shadow-lg active:scale-[0.98] hover:-translate-y-0.5",
        secondary:
          "bg-transparent border-2 border-primary text-primary hover:bg-primary/5 dark:hover:bg-primary/10 active:scale-[0.98]",
        ghost: "hover:bg-accent/50 hover:text-accent-foreground active:scale-[0.98]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-md hover:shadow-lg active:scale-[0.98] hover:-translate-y-0.5",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-base",
        icon: "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

interface AnimatedButtonProps extends React.ComponentProps<"button">, VariantProps<typeof animatedButtonVariants> {
  asChild?: boolean
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant, size, asChild = false, children, icon, iconPosition = "right", ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const [isHovered, setIsHovered] = React.useState(false)

    return (
      <Comp
        ref={ref}
        className={cn(animatedButtonVariants({ variant, size, className }))}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {/* Gradient sweep effect on hover */}
        {variant === "default" && (
          <span
            className={cn(
              "absolute inset-0 bg-gradient-to-r from-primary-foreground/0 via-primary-foreground/10 to-primary-foreground/0 transition-transform duration-500 ease-out",
              isHovered ? "translate-x-0" : "-translate-x-full",
            )}
          />
        )}

        {/* Glow pulse effect */}
        {variant === "default" && (
          <span
            className={cn(
              "absolute inset-0 rounded-2xl transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0",
            )}
            style={{
              boxShadow: "0 0 20px oklch(0.65 0.18 145 / 0.4), 0 0 40px oklch(0.65 0.18 145 / 0.2)",
            }}
          />
        )}

        {/* Content wrapper */}
        <span className="relative z-10 flex items-center gap-2">
          {icon && iconPosition === "left" && (
            <span
              className={cn(
                "transition-transform duration-150 ease-out",
                isHovered && iconPosition === "left" && "-translate-x-1",
              )}
            >
              {icon}
            </span>
          )}

          <span
            className={cn(
              "transition-transform duration-150 ease-out",
              isHovered && icon && iconPosition === "right" && "translate-x-0.5",
            )}
          >
            {children}
          </span>

          {icon && iconPosition === "right" && (
            <span
              className={cn(
                "transition-transform duration-150 ease-out",
                isHovered && iconPosition === "right" && "translate-x-1",
              )}
            >
              {icon}
            </span>
          )}
        </span>
      </Comp>
    )
  },
)

AnimatedButton.displayName = "AnimatedButton"

export { AnimatedButton, animatedButtonVariants }
