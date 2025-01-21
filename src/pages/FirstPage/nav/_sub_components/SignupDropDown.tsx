import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

export function SignupDropDown() {
  const [open, setOpen] = React.useState(false);
  return (
    <DropdownMenu open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
      <DropdownMenuTrigger
        asChild
        className="border-[#f26627] focus:border-[#f26627]  focus:outline-none"
      >
        <Button
          variant="outline"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className="border-[#f26627] hover:bg-[#f26627] rounded-[0.625rem] h-[3.1875rem] text-[#f26627] hover:text-white focus-visible:ring-0 " //focus-visible:outline-none
        >
          Sign Up
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56"
        style={{ transform: "translateY(-3px)" }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
