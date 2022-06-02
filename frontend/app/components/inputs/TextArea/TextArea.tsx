import { Icon } from "@iconify/react";
import { ForwardedRef, ReactNode, useEffect, useRef, useState } from "react";
import { tw, css, apply } from "twind/css";
import { Text } from "../../Text";

interface TextAreaProps
  extends Pick<React.HTMLAttributes<HTMLInputElement>, "defaultValue"> {
  label?: string;
  id: string;
  helperText?: string;
  placeholder?: string;
  rows?: number;
  error?: boolean;
  success?: boolean;
  icon?: string;
  iconPlacement?: "left" | "right";
  onClick?: () => {};
  fullWidth?: boolean;
  className?: string;
}

export const TextArea = ({
  label,
  id,
  helperText,
  rows = 3,
  error,
  success,
  icon,
  iconPlacement = "right",
  onClick,
  fullWidth,
  className,
  ...restProps
}: TextAreaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // The value of the textarea
  const [value, setValue] = useState<String>();

  // This function is triggered when textarea changes
  const textAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [value]);

  return (
    <div
      className={tw("inline-flex flex-col", {
        "w-full": fullWidth,
      })}
    >
      {label && (
        <label
          htmlFor={id}
          className={tw(`transition-all duration-150 text-gray-400 text-body1`)}
        >
          {label}
        </label>
      )}
      <div>
        {icon && (
          <Icon
            icon={icon}
            className={tw(`absolute top-1/2 right-2 -translate-y-1/2`, {
              "left-2": iconPlacement === "left",
            })}
          />
        )}
        <textarea
          name={id}
          id={id}
          placeholder=" "
          rows={rows}
          onChange={textAreaChange}
          className={tw(
            `appearance-none border-gray-300 border-2 rounded-1 text-body1 outline-none p-2 focus:border-primary-500
      resize-none overflow-hidden w-full`,
            { "border-danger-500 focus:border-danger-500": error },
            { "border-success-500 focus:border-success-500": success },
            {
              "pl-5!": Boolean(icon) && iconPlacement === "left",
              "pr-5!": Boolean(icon) && iconPlacement === "right",
            },
            className
          )}
          ref={textareaRef}
          {...restProps}
        ></textarea>
      </div>
      {helperText && (
        <Text
          size="body2"
          color={error ? "danger.main" : success ? "success.main" : "gray.400"}
        >
          {helperText}
        </Text>
      )}
    </div>
  );
};
