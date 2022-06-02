import { LineConfig } from "konva/lib/shapes/Line";
import { CreateLayer, Draw } from ".";

export const createDrawFree = ({ position, color }: CreateLayer) => {
  return {
    tool: "pen",
    component: "Line",
    stroke: color,
    strokeWidth: 5,
    lineCap: "round",
    bezier: true,
    points: [position?.x, position?.y],
  };
};

export const drawFree = ({ layer, position }: Draw & { layer: LineConfig }) => {
  layer.points = [...layer.points!, position.x, position.y];

  return layer;
};
