import { CreateLayer } from ".";

export const createText = ({ position }: CreateLayer) => {
  return {
    tool: "text",
    component: "Text",
    stroke: "#df4b26",
    fontSize: 20,
    text: "text here",
    x: position?.x,
    y: position?.y,
  };
};
