import React, { useRef, useState } from "react";
import { tw } from "twind/css";

interface RadioProps
  extends Pick<
    React.ButtonHTMLAttributes<HTMLInputElement>,
    "disabled" | "onChange"
  > {
  checked?: boolean;
  value: string;
  label: string;
  size?: "small" | "normal";
  error?: boolean;
  editing?: boolean;
  onEdit?: (event: HTMLInputElement["onchange"]) => void;
}

export const Radio = ({
  value,
  checked,
  label,
  error,
  size = "normal",
  disabled,
  ...restProps
}: RadioProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const parentNode = ref.current && (ref.current.parentNode as HTMLDivElement);
  const name = parentNode?.getAttribute("id") ?? undefined;

  return (
    <div ref={ref}>
      <label
        className={tw("flex gap-2 cursor-pointer items-center select-none", {
          "text-body2": size === "small",
          "cursor-default": disabled,
        })}
      >
        <input
          className={tw(
            "appearance-none cursor-pointer h-[20px] w-[20px] rounded-full bg-white border border-gray-300 checked:border-6 checked:border-primary-main disabled:cursor-default",
            {
              "h-[13px] w-[13px] checked:border-4": size === "small",
              "checked:border-danger-main": error,
            }
          )}
          type="radio"
          value={value}
          name={name}
          checked={checked || error}
          disabled={disabled}
          {...restProps}
        />
        {label}
      </label>
    </div>
  );
};
