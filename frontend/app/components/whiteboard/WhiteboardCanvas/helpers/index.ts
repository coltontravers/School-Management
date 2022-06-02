import { Vector2d } from "konva/lib/types";

export interface DrawHelper {
  context: React.MutableRefObject<CanvasRenderingContext2D | null | undefined>;
  nativeEvent: { offsetX: number; offsetY: number };
}

export interface CreateLayer {
  position: Vector2d;
  color: string;
}

export interface Draw {
  position: Vector2d;
}

export * from "./free";
export * from "./shapes";
export * from "./text";
export * from "./shapes";
