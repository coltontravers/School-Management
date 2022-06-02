import React, { useContext, useState } from "react";
import { tw } from "twind/css";
import { IconButton, IconButtonProps } from "~/components/inputs/IconButton";
import { Flexbox } from "~/components/layout/Flexbox";
import { WhiteboardContext } from "../WhiteboardCanvas/context/context";
import { Tool } from "../WhiteboardCanvas/types/tools";

interface WhiteboardToolbarProps {
  onToolChange: (tool: Tool) => void;
}

// Add a range slider, color picker, and size/stroke selector.
const BasicExpandedOptions = ({
  activeTool,
  updateActiveTool,
}: {
  activeTool: Tool;
  updateActiveTool: (tool: Tool) => void;
}) => {
  return (
    <Flexbox alignItems="center">
      <input
        type="color"
        value={activeTool.extended.color}
        onChange={(e) =>
          updateActiveTool({
            ...activeTool,
            extended: { ...activeTool.extended, color: e.target.value },
          })
        }
      />
    </Flexbox>
  );
};

const ExpandedToolbar = ({
  activeTool,
  updateActiveTool,
}: {
  activeTool: Tool;
  updateActiveTool: (tool: Tool) => void;
}) => {
  const [primaryTool, extendedTool] = activeTool.tool.split(".");

  switch (primaryTool) {
    case "shape":
      return (
        <div
          className={tw`bg-white w-min flex flex-row rounded divide-x divide-gray-300 border border-gray-300`}
        >
          <ToolbarButton
            icon="akar-icons:circle"
            selected={extendedTool === "circle"}
            key="circle"
            onClick={() => {
              updateActiveTool({ ...activeTool, tool: "shape.circle" });
            }}
          />
          <ToolbarButton
            icon="akar-icons:square"
            selected={extendedTool === "rectangle"}
            key="rectangle"
            onClick={() => {
              updateActiveTool({ ...activeTool, tool: "shape.rectangle" });
            }}
          />
          <BasicExpandedOptions
            activeTool={activeTool}
            updateActiveTool={updateActiveTool}
          />
        </div>
      );

    default:
      return <></>;
  }
};

export const WhiteboardToolbar = ({ onToolChange }: WhiteboardToolbarProps) => {
  const whiteboardContext = useContext(WhiteboardContext);

  if (!whiteboardContext) return null;

  const { tools, updateActiveTool, activeTool } = whiteboardContext;

  return (
    <div className={tw`w-min p-2`}>
      <div className={tw`absolute left-10`}>
        <ExpandedToolbar
          activeTool={activeTool}
          updateActiveTool={updateActiveTool}
        />
      </div>

      <div
        className={tw`bg-white w-min rounded divide-y divide-gray-300 border border-gray-300`}
      >
        {tools.map((currentTool) => {
          const { tool, icon } = currentTool;
          const [primaryTool] = activeTool.tool.split(".");

          return (
            <ToolbarButton
              icon={icon}
              selected={tool === primaryTool}
              key={tool}
              onClick={() => {
                updateActiveTool(currentTool);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

interface ToolbarButtonProps extends IconButtonProps {
  selected: boolean;
}

const ToolbarButton = ({
  icon,
  selected,
  ...restProps
}: ToolbarButtonProps) => {
  return (
    <IconButton
      icon={icon}
      className={tw(`active:bg-primary-100 focus-visible:bg-primary-100`, {
        "bg-primary-100": selected,
      })}
      {...restProps}
    />
  );
};
