import { cn } from "@/lib/utils";

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "text-xs font-bold uppercase tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

export { Label };
