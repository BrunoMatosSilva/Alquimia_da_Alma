import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";

export function PopoverRoot({ children }: {children: React.ReactNode}) {
  return (
    <Popover>
      {children}
    </Popover>
  )
}

export function PopoverActive({ children }: {children: React.ReactNode}) {
  return (
    <PopoverTrigger className="outline-none" asChild>
      {children}
    </PopoverTrigger>
  )
}

interface PopoverWrapperProps {
  children: React.ReactNode;
  className?: string;
}


function PopoverWrapper({ children, className }: PopoverWrapperProps) {
  return (
    <PopoverContent
    className={cn(
      "rounded-2xl space-y-2 p-4",
      className
    )}>
      {children}
    </PopoverContent>
  )
  }

  export const PopoverComponents = {
    Root: PopoverRoot,
    Trigger: PopoverActive,
    Content: PopoverWrapper,
  }