import { Loader2Icon } from "lucide-react"

import { cn } from "@repo/ui/lib/utils"
import { forwardRef } from "react"

const Spinner = forwardRef<SVGSVGElement, React.ComponentProps<"svg">>(
  ({ className, ...props }, ref) => {
    const { ref: _, ...restProps } = props
    return (
      <Loader2Icon
        ref={ref}
        role="status"
        aria-label="Loading"
        className={cn("size-4 animate-spin", className)}
        {...restProps}
      />
    )
  }
)
Spinner.displayName = "Spinner"

export { Spinner }
