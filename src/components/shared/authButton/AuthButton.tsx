"use client";

import React from "react";

interface AuthButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export default function AuthButton({
  type = "button",
  onClick,
  children,
  className = "",
  disabled = false,
}: AuthButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`w-full bg-[#217AFC] text-[#FFFFFF] py-2 rounded-md hover:bg-[#0D5AE8] border border-[#0D5AE8] text-sm font-semibold transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      style={{
        boxShadow:
          "0px 1px 1px 0px rgba(100, 102, 241, 0.12), 0px 2px 2px 0px rgba(100, 102, 241, 0.12)",
      }}
    >
      {children}
    </button>
  );
}
