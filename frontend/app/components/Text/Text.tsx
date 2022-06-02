import { ElementType, ReactNode } from "react";
import { tw } from "twind/css";
import {
  FontSize,
  fontSizes,
  FontWeight,
  fontWeights,
  TextColor,
  textColors,
} from "../../theme";

type TextProps = {
  size?: FontSize;
  component?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  weight?: FontWeight;
  color?: TextColor;
  truncate?: boolean;
  display?: "block" | "inline" | "inline-block";
  children: ReactNode;
  className?: string;
};

const sizeMap: {
  [key in FontSize]: ElementType;
} = {
  caption: "span",
  body1: "span",
  body2: "span",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
};

export const Text = ({
  component,
  size = "body1",
  color = "black",
  weight = "base",
  display,
  truncate,
  className,
  children,
  ...restProps
}: TextProps) => {
  const Rendered = component ?? sizeMap[size];

  return (
    <Rendered
      className={tw(
        textColors[color],
        fontSizes[size],
        fontWeights[weight],
        display && `${display}`,
        {
          truncate: truncate,
        },
        className
      )}
      {...restProps}
    >
      {children}
    </Rendered>
  );
};
