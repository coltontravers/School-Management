import { Icon } from "@iconify/react";
import { ForwardedRef, ReactNode } from "react";
import { tw, css, apply } from "twind/css";
import { Text } from "~/components/Text";

export interface TextInputProps
  extends Pick<
    React.HTMLAttributes<HTMLInputElement>,
    "defaultValue" | "onClick"
  > {
  id?: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  error?: boolean;
  success?: boolean;
  icon?: string;
  iconPlacement?: "left" | "right";
  fullWidth?: boolean;
  forwardedRef?: ForwardedRef<HTMLInputElement>;
}

const Input = ({
  icon,
  iconPlacement = "right",
  onClick,
  forwardedRef,
  error,
  success,
  helperText,
  ...restProps
}: TextInputProps) => (
  <>
    <div className={tw(`relative`)}>
      {icon && (
        <Icon
          icon={icon}
          className={tw(`absolute top-1/2 right-2 -translate-y-1/2`, {
            "left-2": iconPlacement === "left",
          })}
        />
      )}
      <input
        type="text"
        onClick={onClick}
        ref={forwardedRef}
        placeholder=" "
        className={tw(
          `border-2 border-gray-300 rounded-1 p-2 text-body1 text-black w-full focus:outline-none focus:border-primary-500
`,
          {
            "border-danger-500 focus:border-danger-500": error,
            "border-success-500 focus:border-success-500": success,
            "pl-5!": Boolean(icon) && iconPlacement === "left",
            "pr-5!": Boolean(icon) && iconPlacement === "right",
          }
        )}
        {...restProps}
      ></input>
    </div>
    {helperText && (
      <Text
        size="body2"
        color={error ? "danger.main" : success ? "success.main" : "gray.400"}
      >
        {helperText}
      </Text>
    )}
  </>
);

export const TextInput = ({
  label,
  fullWidth,
  ...restProps
}: TextInputProps) => {
  return (
    <div
      className={tw("inline-flex flex-col min-w-[120px]", {
        "w-full": fullWidth,
      })}
    >
      {label ? (
        <label
          className={tw(`transition-all duration-150 text-gray-400 text-body2`)}
        >
          {label}
          <Input {...restProps} />
        </label>
      ) : (
        <Input {...restProps} />
      )}
    </div>
  );
};
