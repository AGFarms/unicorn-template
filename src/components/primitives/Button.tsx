import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

/**
 * Color rules (LOCKED):
 *  - primary/secondary/ghost = teal (action)
 *  - stamp                   = gold (verification proof ONLY)
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bone)] disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-teal)] text-[var(--color-bone)] hover:opacity-90",
        secondary:
          "border border-[var(--color-basalt)] text-[var(--color-basalt)] hover:bg-[var(--color-basalt)] hover:text-[var(--color-bone)]",
        ghost:
          "text-[var(--color-teal)] hover:underline underline-offset-4",
        stamp:
          "bg-[var(--color-gold)] text-[var(--color-basalt)] uppercase tracking-widest text-xs",
      },
      size: {
        sm: "h-8 px-3 text-sm rounded-sm",
        md: "h-10 px-5 text-base rounded-md",
        lg: "h-12 px-7 text-lg rounded-md",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export { buttonVariants };
