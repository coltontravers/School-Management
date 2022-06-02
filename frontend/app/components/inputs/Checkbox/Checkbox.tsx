import { ForwardedRef, useState } from "react";
import { css, tw } from "twind/css";

interface CheckboxProps
  extends Pick<
    React.ButtonHTMLAttributes<HTMLInputElement>,
    "disabled" | "onChange"
  > {
  defaultChecked?: boolean;
  checked?: boolean;
  name?: string;
  size?: "small" | "normal";
  disabled?: boolean;
  label?: string;
  error?: boolean;
  editing?: boolean;
  forwardedRef?: ForwardedRef<HTMLInputElement>;
  onEdit?: (event: HTMLInputElement["onchange"]) => void;
}

const backgroundImage = css`
  &:checked {
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/900px-White_check.svg.png?20140305103308");
  }
`;

export const Checkbox = ({
  defaultChecked,
  label,
  size = "normal",
  error,
  name,
  disabled,
  forwardedRef,
  ...restProps
}: CheckboxProps) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <label
        className={tw("flex gap-2 cursor-pointer items-center select-none", {
          "text-body2": size === "small",
          "cursor-default": disabled,
        })}
        htmlFor={label}
      >
        <input
          className={tw(
            `appearance-none cursor-pointer w-[20px] h-[20px] rounded bg-white rounded border border-gray-300 bg-center bg-no-repeat !bg-contain checked:bg-primary-main checked:border-4 checked:border-primary-main`,
            backgroundImage,
            {
              "h-[13px] w-[13px]": size === "small",
              "checked:border-danger-main checked:bg-danger-main": error,
            }
          )}
          type="checkbox"
          name={name}
          id={label}
          checked={checked || error}
          onChange={handleChange}
          disabled={disabled}
          ref={forwardedRef}
          {...restProps}
        />
        {label}
      </label>
    </div>
  );
};
