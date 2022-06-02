interface DefaultTool {
  icon: string;
}

export interface Pen extends DefaultTool {
  tool: "pen";
  extended: {
    size: number;
    color: string;
  };
}

export interface Text extends DefaultTool {
  tool: "text";
  size: number;
  color: string;
  family: string;
  weight: string;
}

export interface Eraser extends DefaultTool {
  tool: "eraser";
  size: number;
}

export interface Select extends DefaultTool {
  tool: "select";
}

export interface Drag extends DefaultTool {
  tool: "drag";
}

export interface Shape extends DefaultTool {
  tool: "shape" | "shape.circle" | "shape.rectangle";
  extended?: {
    tools: [
      { tool: "shape.circle"; icon: string },
      { tool: "shape.rectangle"; icon: string }
    ];
    color: string;
  };
}

export interface Pan extends DefaultTool {
  tool: "pan";
}

export interface Zoom extends DefaultTool {
  tool: "zoom" | "zoom.zoomOut" | "zoom.zoomIn";
  extended: {
    tools: [
      { tool: "zoomIn"; icon: string },
      { tool: "zoomOut"; icon: string }
    ];
    amount: 0;
  };
}

export interface Undo extends DefaultTool {
  tool: "undo";
}

export interface Redo extends DefaultTool {
  tool: "redo";
}

export type Tool =
  | Pen
  | Text
  | Eraser
  | Select
  | Drag
  | Shape
  | Pan
  | Zoom
  | Undo
  | Redo;
