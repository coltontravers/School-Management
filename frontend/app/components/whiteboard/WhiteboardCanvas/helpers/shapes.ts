import { EllipseConfig } from "konva/lib/shapes/Ellipse";
import { RectConfig } from "konva/lib/shapes/Rect";
import { CreateLayer, Draw } from ".";

export const createRectangle = ({ position, color }: CreateLayer) => {
  return {
    tool: "shape.rectangle",
    component: "Rect",
    x: position?.x,
    y: position?.y,
    height: 0,
    width: 0,
    fill: color,
    stroke: "black",
    strokeWidth: 4,
    points: [position.x, position.y],
  };
};

export const drawRectangle = ({
  layer,
  position,
}: Draw & { layer: RectConfig }) => {
  layer.width = position.x - layer?.x!;
  layer.height = position.y - layer.y!;

  return layer;
};

export const createCircle = ({ position, color }: CreateLayer) => {
  return {
    tool: "shape.circle",
    component: "Ellipse",
    x: position?.x,
    y: position?.y,
    radius: { x: 0, y: 0 },
    fill: color,
    stroke: "black",
    strokeWidth: 4,
  };
};

export const drawCircle = ({
  layer,
  position,
}: Draw & { layer: EllipseConfig }) => {
  const newRadius = Math.sqrt(
    Math.pow(layer.x! - position.x, 2) + Math.pow(layer.y! - position.y, 2)
  );

  // const diffX = point?.x - lastLayer.x;
  // const diffY = point?.y - lastLayer.y;

  // console.log({ diffX, diffY });

  // lastLayer.radius = newRadius;
  // lastLayer.scaleX = lastLayer.x + diffX;
  // lastLayer.scaleY = lastLayer.y + diffY;

  // lastLayer.x = (lastLayer.x + point.x) / 2;
  // lastLayer.y = (lastLayer.y + point.y) / 2;
  layer.radius = {
    x: Math.sqrt(Math.pow(layer.x! - position.x, 2)),
    y: Math.sqrt(Math.pow(layer.y! - position.y, 2)),
  };

  return layer;
};
