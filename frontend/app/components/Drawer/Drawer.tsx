import { HTMLAttributes, useEffect, useRef, useState } from "react";

interface Props extends Pick<HTMLAttributes<HTMLDivElement>, "role"> {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

function createPortalRoot() {
  const drawerRoot = document.createElement("div");
  drawerRoot.setAttribute("id", "drawer-root");
  return drawerRoot;
}

export const Drawer = ({ open, role }: Props) => {
  // const [isOpen, setIsOpen] = useState(open);
  const bodyRef = useRef<HTMLBodyElement>(document.querySelector("body"));
  const portalRootRef = useRef<HTMLElement>(
    document.getElementById("drawer-root") || createPortalRoot()
  );

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.appendChild(portalRootRef.current);
      const portal = portalRootRef.current;
      const bodyEl = bodyRef.current;
      return () => {
        // Clean up the portal when drawer component unmounts
        portal.remove();
        // Ensure scroll overflow is removed
        bodyEl.style.overflow = "";
      };
    }
  }, []);

  useEffect(() => {
    const updatePageScroll = () => {
      if (bodyRef.current) {
        if (open) {
          bodyRef.current.style.overflow = "hidden";
        } else {
          bodyRef.current.style.overflow = "";
        }
      }
    };

    updatePageScroll();
  }, [open]);

  return <div aria-hidden={open ? "false" : "true"} role={role}></div>;
};
