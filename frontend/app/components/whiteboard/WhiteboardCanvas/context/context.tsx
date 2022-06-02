import React, { ReactNode } from "react";
import { Tool } from "../types/tools";

type Context = {
  activeTool: Tool;
  tools: Tool[];
  updateActiveTool: (tool: Tool) => void;
};

const defaultTools: Tool[] = [
  {
    tool: "pen",
    icon: "charm:pencil",
    extended: {
      color: "#ff00d4",
      size: 3,
    },
  },
  {
    tool: "text",
    color: "#000000",
    family: "Lato",
    size: 16,
    weight: "normal",
    icon: "bi:cursor-text",
  },
  { tool: "eraser", size: 3, icon: "bi:eraser" },
  { tool: "select", icon: "carbon:select-01" },
  { tool: "drag", icon: "akar-icons:cursor" },
  {
    tool: "shape",
    icon: "bx:bxs-shapes",
    extended: {
      tools: [
        { tool: "shape.circle", icon: "" },
        { tool: "shape.rectangle", icon: "" },
      ],
      color: "#000000",
    },
  },
  { tool: "pan", icon: "grommet-icons:pan" },
  {
    tool: "zoom",
    icon: "bi:zoom-in",
    extended: {
      tools: [
        { tool: "zoomIn", icon: "" },
        { tool: "zoomOut", icon: "" },
      ],
      amount: 0,
    },
  },
  { tool: "undo", icon: "bx:bx-undo" },
  { tool: "redo", icon: "bx:bx-redo" },
];

export const WhiteboardContext = React.createContext<Context | null>(null);

export const WhiteboardProvider = ({ children }: { children: ReactNode }) => {
  const [activeTool, setActiveTool] = React.useState<Tool>(defaultTools[0]);
  const [tools, setTools] = React.useState<typeof defaultTools>(defaultTools);

  const updateActiveTool = (newTool: Tool) => {
    setActiveTool(newTool);
    const foundToolIndex = tools.findIndex(({ tool }) => tool === newTool.tool);

    tools[foundToolIndex] = newTool;
    setTools(tools);
  };

  return (
    <WhiteboardContext.Provider value={{ activeTool, updateActiveTool, tools }}>
      {children}
    </WhiteboardContext.Provider>
  );
};
