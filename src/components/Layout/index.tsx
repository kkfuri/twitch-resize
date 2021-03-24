import React from "react";
import Image from "next/image";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex flex-col items-center justify-center flex-1 h-screen mx-auto bg-gray-100">
      <div className="absolute top-12">
        <Image
          src="/logo.png"
          layout="intrinsic"
          alt="Logo"
          width={580}
          height={56}
        />
      </div>
      {children}
    </div>
  );
}
