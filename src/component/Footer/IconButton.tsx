import { ReactNode } from "react";

interface IconButtonProps {
  children: ReactNode;
  ariaLabel: string;
  href?: string;
}

export default function IconButton({ children, ariaLabel, href }: IconButtonProps) {
  const content = (
    <span aria-label={ariaLabel} className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#C5CEBA] text-[#1D331C] transition-all hover:bg-[#B3BFB5] hover:scale-105">
      {children}
    </span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
