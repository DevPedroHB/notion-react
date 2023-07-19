import { ComponentProps, ReactNode } from "react";

interface IBubbleButton extends ComponentProps<"button"> {
  children: ReactNode;
}

export function BubbleButton({ children, ...rest }: IBubbleButton) {
  return (
    <button
      {...rest}
      className="p-2 text-zinc-600 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-700 hover:bg-zinc-200 data-[active=true]:text-violet-500"
    >
      {children}
    </button>
  );
}
