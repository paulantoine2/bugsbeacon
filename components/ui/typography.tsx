import { PropsWithChildren } from "react";

export function TypographyH2({ children }: PropsWithChildren<{}>) {
  return (
    <h2 className="scroll-m-20  text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
}

export function TypographyH4({ children }: PropsWithChildren<{}>) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
}
