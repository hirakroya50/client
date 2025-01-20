import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: ReactNode; // Specifies that children can be any valid React node
  className?: string; // Optional className prop
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("", className)}>
      <div className="p-4 max-w-4xl  mx-auto">{children}</div>
    </div>
  );
};

export default PageContainer;
