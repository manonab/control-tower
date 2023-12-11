import type { ReactNode } from "react";
import React from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`flex flex-col ${className} h-screen`}>
      {children}
    </div>
  );
};
