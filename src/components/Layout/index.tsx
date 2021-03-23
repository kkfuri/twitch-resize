import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 h-screen mx-auto bg-gray-100">
      {children}
    </div>
  );
}
