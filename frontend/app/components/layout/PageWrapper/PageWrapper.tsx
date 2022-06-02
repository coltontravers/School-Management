import React, { ReactNode } from "react";
import { tw } from "twind/css";
import { Spacing } from "~/theme";
import { PageHeader } from "../PageHeader";
import { Sidebar } from "../Sidebar";

interface Props {
  hideHeader?: boolean;
  padding?: Spacing;
  gap?: Spacing;
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export const PageWrapper = ({
  hideHeader,
  padding = 3,
  gap = 0,
  children,
  className,
  fullHeight,
}: Props) => {
  return (
    <div className={tw(`flex h-screen`, className)}>
      <Sidebar role="student" />
      <main className={tw(`flex-1 flex w-full flex-col overflow-auto`)}>
        {!hideHeader && <PageHeader />}
        <div
          className={tw(
            `flex flex-1 flex-col p-${padding.toString()} gap-${gap.toString()}`,
            { "overflow-hidden": fullHeight }
          )}
        >
          {children}
        </div>
      </main>
    </div>
  );
};
