import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "outline" | "ghost" | "none";
};

const variants = {
  outline:
    "px-4 py-1 mx-auto mt-5 text-gray-500 transition-colors duration-75 border border-gray-200 rounded-sm shadow-lg hover:text-blue-500 hover:border-blue-400",
  ghost:
    "mt-2 font-mono font-light tracking-tighter text-gray-400 transition-colors duration-75 hover:text-outgray-600",
  none: ""
};

export function Button({ variant = "none", ...props }: Props) {
  return <button type="button" className={variants[variant]} {...props} />;
}
