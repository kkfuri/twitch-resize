import React from "react";

type Props = {
  src: string;
  alt: string;
  size: number;
  onClick: (ev: any) => void;
};

export function ResizedItem({ src, alt, size, onClick }: Props) {
  return (
    <div
      className="flex flex-col items-center justify-center text-gray-500 transition-colors delay-75 hover:text-blue-500 group"
      role="button"
      tabIndex={-1}
      onKeyPress={onClick}
      onClick={onClick}
    >
      <div className="p-2 overflow-hidden transition-colors border border-gray-200 rounded-sm shadow-lg group-hover:border-blue-400">
        <img src={src} alt={alt} width={size} height={size} />
      </div>
      <span className="text-sm font-light">{[size, size].join("x")}</span>
    </div>
  );
}
