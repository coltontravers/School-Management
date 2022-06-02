import { forwardRef, ReactNode, useRef, useState } from "react";
import { usePopper } from "react-popper";
import { apply, css, tw } from "twind/css";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { Button, ButtonProps } from "../inputs/Button";

interface DropdownProps extends Pick<ButtonProps, "variant" | "tone" | "size"> {
  label: string;
  icon?: string;
  children: ReactNode;
  placement?: "auto" | "left" | "right" | "bottom" | "top";
}

const ForwardedButton = forwardRef((props: ButtonProps, ref) => (
  <Button forwardedRef={ref as any} {...props} />
));

export const Dropdown = ({
  label,
  icon = "akar-icons:arrow-down",
  children,
  placement = "bottom",
  ...restProps
}: DropdownProps) => {
  const dropdown = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [
      { name: "offset", options: { offset: [8, 8] } },
      {
        name: "preventOverflow",
        options: {
          padding: 8,
        },
      },
    ],
  });

  useOnClickOutside(dropdown, () => setIsVisible(false));

  return (
    <div ref={dropdown} className={tw`inline`}>
      <ForwardedButton
        icon={icon}
        onClick={() => setIsVisible(!isVisible)}
        ref={setReferenceElement as any}
        {...restProps}
      >
        {label}
      </ForwardedButton>

      {isVisible && (
        <div
          className={tw`min-w-[150px] bg-white rounded border border-x-gray-400 shadow-lightSm z-50`}
          id="popover"
          ref={setPopperElement as any}
          style={styles.popper}
          {...attributes.popper}
        >
          {children}
        </div>
      )}
    </div>
  );
};
