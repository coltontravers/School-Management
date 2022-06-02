import { useState, ReactNode } from "react";
import { Icon } from "@iconify/react";
import { tw } from "twind/css";
import { Button, ButtonProps } from "~/components/inputs/Button";
// import { ArrowToRight } from "styled-icons/boxicons-regular";
import { Roles } from "~/types";

interface SidebarProps {
  open?: boolean;
  expanded?: boolean;
  role: Roles;
}

const buttons = {
  student: [
    {
      icon: "charm:layout-dashboard",
      children: "Dashboard",
    },
    {
      icon: "healthicons:i-training-class",
      children: "Classes",
    },
    {
      icon: "ic:baseline-assignment",
      children: "Assignments",
    },
    {
      icon: "bx:bx-library",
      children: "Library",
    },
    {
      icon: "vs:whiteboard",
      children: "Whiteboard",
    },
    {
      icon: "mdi:bulletin-board",
      children: "My School",
    },
    {
      icon: "ant-design:message-outlined",
      children: "Messages",
    },
  ],
  parent: [
    {
      icon: "charm:layout-dashboard",
      children: "Dashboard",
    },
    {
      icon: "healthicons:i-training-class",
      children: "Classes",
    },
    {
      icon: "ic:baseline-assignment",
      children: "Assignments",
    },
    {
      icon: "bx:bx-library",
      children: "Library",
    },
    {
      icon: "vs:whiteboard",
      children: "Whiteboard",
    },
    {
      icon: "mdi:bulletin-board",
      children: "My School",
    },
    {
      icon: "ant-design:message-outlined",
      children: "Messages",
    },
  ],
  teacher: [
    {
      icon: "charm:layout-dashboard",
      children: "Dashboard",
    },
    {
      icon: "healthicons:i-training-class",
      children: "Classes",
    },
    {
      icon: "ic:baseline-assignment",
      children: "Assignments",
    },
    {
      icon: "bx:bx-library",
      children: "Library",
    },
    {
      icon: "vs:whiteboard",
      children: "Whiteboard",
    },
    {
      icon: "mdi:bulletin-board",
      children: "My School",
    },
    {
      icon: "ant-design:message-outlined",
      children: "Messages",
    },
  ],
  admin: [
    {
      icon: "charm:layout-dashboard",
      children: "Dashboard",
    },
    {
      icon: "healthicons:i-training-class",
      children: "Classes",
    },
    {
      icon: "bi:bookmark-star",
      children: "Events",
    },
    {
      icon: "bx:bx-library",
      children: "Library",
    },
    {
      icon: "mdi:bulletin-board",
      children: "My School",
    },
    {
      icon: "ant-design:message-outlined",
      children: "Messages",
    },
  ],
};

export const Sidebar = ({
  open = true,
  expanded = true,
  role,
}: SidebarProps) => {
  return (
    <div
      className={tw(
        "hidden h-screen sticky top-0 lg:flex flex-col bg-gray-100 border-r px-4 w-4/12 xl:w-1/6 max-w-[15rem] justify-between overflow-hidden"
      )}
    >
      <div className={tw`flex flex-col gap-2 pt-2`}>
        {buttons[role].map(({ icon, children }) => {
          return (
            <SidebarButton icon={icon} active={children === "Dashboard"}>
              {children}
            </SidebarButton>
          );
        })}
      </div>

      <div
        className={tw(
          "border-t-2 border-primary-400 py-3 px-1 flex items-center justify-center",
          [
            {
              "px-5 justify-between": expanded,
            },
          ]
        )}
      >
        <img
          className={tw`h-5 rounded-full shadow-lightSm `}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
        />
        <span>Colton Travers</span>
        {/* <ArrowToRight className={tw`h-5`} /> */}
      </div>
    </div>
  );
};

const SidebarButton = ({
  children,
  icon,
  active,
  ...restProps
}: SidebarButtonProps) => {
  return (
    <Button
      variant="transparent"
      textColor="black"
      icon={icon}
      iconLocation="left"
      className={tw(
        "justify-end bg-primary-main(hover:& active:&) text-white(hover:& active:&) my-1 hover:shadow-none",
        {
          "bg-primary-main! text-white!": active,
        }
      )}
      fullWidth
      {...restProps}
    >
      {children}
    </Button>
  );
};

interface SidebarButtonProps extends ButtonProps {
  active: boolean;
}
