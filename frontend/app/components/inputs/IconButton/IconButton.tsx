import { Icon } from "@iconify/react";
import React, { HTMLAttributes } from "react";
import { tw } from "twind/css";
import {
  FontSize,
  fontSizes,
  TextColor,
  textColors,
  BackgroundColor,
  backgroundColors,
} from "~/theme";

export interface IconButtonProps
  extends Pick<HTMLAttributes<HTMLButtonElement>, "onClick"> {
  icon: string;
  iconSize?: FontSize;
  color?: TextColor;
  backgroundColor?: BackgroundColor;
  round?: boolean;
  className?: string;
}

export const IconButton = ({
  icon,
  iconSize = "h3",
  color = "black",
  backgroundColor,
  round,
  className,
  ...restProps
}: IconButtonProps) => {
  return (
    <button
      className={tw(
        "appearance-none flex justify-center items-center not-focus-visible:outline-none p-1 filter active:contrast-75",
        backgroundColor && backgroundColors[backgroundColor],
        {
          "rounded-full": round,
        },
        className
      )}
      {...restProps}
    >
      <Icon
        icon={icon}
        className={tw(fontSizes[iconSize], textColors[color])}
      />
    </button>
  );
};
