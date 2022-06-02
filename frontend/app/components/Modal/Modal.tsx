import { ReactNode, useEffect, useRef } from "react";
import ReactDom from "react-dom";
import { css, tw, apply } from "twind/css";
import { Text } from "~/components/Text";
import { Flexbox } from "~/components/layout/Flexbox";
import { IconButton } from "~/components/inputs/IconButton";
import { useOnClickOutside } from "~/hooks/useOnClickOutside";

export interface ModalProps {
  open: boolean;
  title: string;
  onClose?: () => void;
  children: ReactNode;
}

const modalStyles = css`
  ${apply`bg-white shadow-darkSm rounded-1 w-2/4 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
  min-width: 450px;
  max-width: 90vw;
`;

export const Modal = ({
  open,
  title = "Title here",
  onClose = () => {},
  children,
}: ModalProps) => {
  const modal = useRef(null);

  useOnClickOutside(modal, () => onClose());

  useEffect(() => {
    const element = document.getElementsByTagName("main")[0];

    if (element) {
      if (open) {
        element.style.overflow = "hidden";
      } else {
        element.style.overflow = "auto";
      }
    }
  }, [open]);

  if (!open) return null;

  return ReactDom.createPortal(
    <div className={tw`bg-black bg-opacity-20 h-screen w-screen fixed z-50`}>
      <div className={tw(modalStyles)} ref={modal}>
        <Flexbox
          alignItems="center"
          justifyContent="spaceBetween"
          className={tw`px-3 py-2`}
        >
          <Text size="h3">{title}</Text>
          <IconButton
            icon="ant-design:close-outlined"
            className={tw`hover:bg-gray-100 active:bg-gray-200`}
            round
            onClick={onClose}
          />
        </Flexbox>
        {children}
      </div>
    </div>,
    document.getElementById("portal")!
  );
};
