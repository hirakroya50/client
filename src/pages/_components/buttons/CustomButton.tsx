import { Button, ButtonProps } from "@/components/ui/button"; // Import shadcn Button and its props
import React, { ReactNode } from "react";
import clsx from "clsx"; // Utility for merging class names
type ExtendedVariant = ButtonProps["variant"] | "VarA" | "VarB";

interface CustomButtonProps extends Omit<ButtonProps, "variant"> {
  children: ReactNode;
  variant?: ExtendedVariant;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  className,
  variant,
  ...props
}) => {
  return (
    <Button
      className={clsx(
        variant === "VarA"
          ? "bg-[#f26627] border-[#f26627] border  text-sm font-bold hover:bg-[#f26627] rounded-[0.625rem] px-4 py-[1.3rem]"
          : variant === "VarB"
          ? "border-[#f26627] border hover:bg-[#f26627] rounded-[0.625rem] px-4 py-[1.3rem] box-border bg-white text-[#f26627] hover:text-white focus-visible:ring-0 "
          : "",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
