import React, { ForwardedRef, ReactNode } from "react";
import { tw } from "twind/css";
import { Spacing } from "~/theme/spacing";

export interface FlexboxProps {
  direction?: keyof typeof directionOptions;
  alignItems?: keyof typeof alignItemsOptions;
  alignContent?: keyof typeof alignContentOptions;
  justifyContent?: keyof typeof justifyOptions;
  wrap?: keyof typeof wrapOptions;
  gap?: Spacing;
  flex?: keyof typeof flexOptions;
  fullWidth?: boolean;
  forwardedRef?: ForwardedRef<HTMLDivElement>;
  children: ReactNode;
  className?: string;
}

export const directionOptions = {
  row: tw`flex-row`,
  rowReverse: tw`flex-row-reverse`,
  column: tw`flex-col`,
  columnReverse: tw`flex-col-reverse`,
};

export const alignItemsOptions = {
  stretch: tw`items-stretch`,
  center: tw`items-center`,
  start: tw`items-start`,
  end: tw`items-end`,
};

export const alignContentOptions = {
  start: tw`content-start`,
  center: tw`content-center`,
  end: tw`content-end`,
  spaceBetween: tw`content-between`,
  spaceAround: tw`content-around`,
};

export const justifyOptions = {
  start: tw`justify-start`,
  center: tw`justify-center`,
  end: tw`justify-end`,
  spaceBetween: tw`justify-between`,
  spaceAround: tw`justify-around`,
  evenly: tw`justify-evenly`,
};

export const wrapOptions = {
  noWrap: tw`flex-no-wrap`,
  wrap: tw`flex-wrap`,
  wrapReverse: tw`flex-wrap-reverse`,
};

export const flexOptions = {
  "1": tw`flex-1`,
  none: tw`flex-none`,
  shrink: tw`flex-shrink`,
  grow: tw`flex-grow`,
  auto: tw`flex-auto`,
};

export const Flexbox = ({
  gap = 0,
  direction,
  alignContent,
  alignItems,
  justifyContent,
  wrap,
  flex,
  fullWidth,
  forwardedRef,
  children,
  className,
}: FlexboxProps) => {
  return (
    <div
      className={tw(
        `flex gap-${gap}`,
        direction && directionOptions[direction],
        alignItems && alignItemsOptions[alignItems],
        alignContent && alignContentOptions[alignContent],
        justifyContent && justifyOptions[justifyContent],
        wrap && wrapOptions[wrap],
        flex && flexOptions[flex],
        { "w-full": fullWidth },
        className
      )}
      ref={forwardedRef}
    >
      {children}
    </div>
  );
};
