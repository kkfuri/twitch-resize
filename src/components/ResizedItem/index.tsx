import React from "react";
import { Button } from "@/components/Button";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  src: string;
  alt: string;
  size: number;
};

export function ResizedItem({ src, alt, size, ...props }: Props) {
  return (
    <Button
      className="flex flex-col items-center justify-center text-gray-500 transition-colors delay-75 hover:text-blue-500 group"
      {...props}
    >
      <div className="p-2 overflow-hidden transition-colors border border-gray-200 rounded-sm shadow-lg group-hover:border-blue-400">
        <img src={src} alt={alt} width={size} height={size} />
      </div>
      <span className="text-sm font-light">{[size, size].join("x")}</span>
    </Button>
  );
}
