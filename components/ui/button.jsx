import React from "react";
import { cn } from "./utils";

export const Button = ({ className, children, ...props }) => (
  <button
    className={cn(
      "px-4 py-2 rounded bg-green-600 hover:bg-green-700 text-white",
      className
    )}
    {...props}
  >
    {children}
  </button>
);