import { Icon } from "@iconify/react";
import React, { ForwardedRef } from "react";
import { css, tw } from "twind/css";
import { TextColor, textColors } from "~/theme";
import { Text } from "~/components/Text/Text";

type Tone = "primary" | "secondary" | "danger" | "warning" | "success";
type Size = "small" | "medium" | "large";
type Variant = "transparent" | "solid" | "ghost";

export interface ButtonProps
  extends Pick<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "type" | "onClick" | "disabled" | "className"
  > {
  size?: Size;
  tone?: Tone;
  variant?: Variant;
  textColor?: TextColor;
  loading?: boolean;
  icon?: string;
  iconLocation?: "left" | "right";
  fullWidth?: boolean;
  badge?: string | number;
  badgeBackground?: Tone;
  badgeColor?: TextColor;
  children: React.ReactNode;
  forwardedRef?: ForwardedRef<HTMLButtonElement>;
}

export const tones: { [key in Tone]: string } = {
  primary: "primary-main",
  secondary: "secondary-main",
  danger: "danger-main",
  warning: "warning-main",
  success: "success-main",
};

export const sizes: { [key in Size]: string } = {
  small: tw`py-1 px-3`,
  medium: tw`py-1 px-3`,
  large: tw`py-2 px-5`,
};

export const genVariant = ({
  variant,
  tone = "primary",
}: Pick<ButtonProps, "variant" | "tone">) => {
  switch (variant) {
    case "solid":
      return tw`bg-${tones[tone]} hover:bg-${tone}-700 focus-visible:bg-${tone}-700`;
    case "transparent":
      return tw`bg-transparent`;
    case "ghost":
      return tw`bg-transparent border-2 border-${tones[tone]} text-black hover:border-${tone}-200 focus-visible:border-${tone}-200`;
  }
};

export const Button = ({
  size = "medium",
  variant = "solid",
  tone = "primary",
  type = "button",
  textColor = "white",
  disabled = false,
  iconLocation = "right",
  icon,
  fullWidth,
  loading,
  badge,
  badgeBackground = "secondary",
  badgeColor = "white",
  children,
  className,
  forwardedRef,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      disabled={disabled || loading}
      className={tw(
        `relative inline-flex items-center justify-center transition-all duration-150 rounded-1 disabled:cursor-default not-focus-visible:outline-none`,
        [
          {
            "w-full": fullWidth,
            "flex-row-reverse": iconLocation === "left",
            "disabled:bg-gray-300": !loading,
          },
          sizes[size],
          genVariant({ variant, tone }),
          textColors[textColor],
          className,
          css`
            width: fit-content;
          `,
        ]
      )}
      ref={forwardedRef}
      {...restProps}
    >
      {loading && (
        <Icon
          icon="eos-icons:loading"
          className={tw("px-1 text-h2 absolute left-1/2 -translate-x-1/2")}
        />
      )}
      <Text
        className={tw({ invisible: loading })}
        component="span"
        color="inherit"
        size={size === "large" ? "h4" : size === "medium" ? "h5" : "body1"}
      >
        {children}
      </Text>
      {icon && <Icon icon={icon} className={tw`px-1 text-h3`} />}
      {badge && (
        <span
          className={tw`px-2 py-1 inline-flex items-center justify-center rounded-full leading-none bg-${badgeBackground}-main text-${badgeColor}`}
        >
          {badge}
        </span>
      )}
    </button>
  );
};
