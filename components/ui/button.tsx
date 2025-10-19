import React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md active:scale-[0.98]",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 shadow-sm hover:shadow-md active:scale-[0.98]",
        outline:
          "border-2 border-primary bg-background text-primary shadow-xs hover:bg-primary/5 dark:hover:bg-primary/10 active:scale-[0.98]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm hover:shadow-md active:scale-[0.98]",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 active:scale-[0.98]",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-3 has-[>svg]:px-4",
        sm: "h-9 rounded-lg gap-1.5 px-4 has-[>svg]:px-3",
        lg: "h-12 rounded-xl px-8 has-[>svg]:px-6 text-base",
        icon: "size-11",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const classNames = cn(buttonVariants({ variant, size, className }))

  // When using asChild / Slot, Radix requires exactly one child element.
  // Clone the single child and inject our visual structure into it so
  // Slot receives a single element and still includes the background span.
  if (asChild) {
    try {
      const child = React.Children.only(children) as React.ReactElement
      const childProps = (child.props || {}) as any

      const cloned = React.cloneElement(
        child,
        {
          ...childProps,
          className: cn(classNames, childProps.className),
          // preserve any existing props from the caller but allow our props to merge
          ...(props || {}),
        },
        <>
          {variant === "default" && (
            <span className="absolute inset-0 bg-primary-foreground/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
          )}
          <span className="relative z-10 flex items-center gap-2">{childProps.children}</span>
        </>,
      )

      return (
        <Slot data-slot="button" {...props}>
          {cloned}
        </Slot>
      )
    } catch (e) {
      // If the consumer passed multiple children or a non-element, fall back to a regular button
      // and render children normally to avoid breaking the app.
      // eslint-disable-next-line no-console
      console.warn("Button with asChild expects a single React element child. Falling back to a native button.", e)
    }
  }

  const Comp = "button"

  return (
    <Comp data-slot="button" className={classNames} {...props}>
      {variant === "default" && (
        <span className="absolute inset-0 bg-primary-foreground/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Comp>
  )
}

export { Button, buttonVariants }
