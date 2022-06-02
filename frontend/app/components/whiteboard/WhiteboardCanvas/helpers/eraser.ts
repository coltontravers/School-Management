import { CreateLayer } from ".";

export const createEraser = ({ position }: Omit<CreateLayer, "color">) => {
  return {
    tool: "eraser",
    component: "Line",
    stroke: "white",
    strokeWidth: 100,
    tension: 0,
    lineCap: "round",
    lineJoin: "round",
    points: [position.x, position.y, position.x, position.y],
  };
};
