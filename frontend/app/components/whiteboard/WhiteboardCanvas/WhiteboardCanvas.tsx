import React, { useContext, useEffect, useRef, useState } from "react";
import { tw } from "twind/css";
import { WhiteboardToolbar } from "../WhiteboardToolbar";
import {
  createCircle,
  createDrawFree,
  createRectangle,
  createText,
  drawCircle,
  drawFree,
  drawRectangle,
} from "./helpers";
import Konva, {
  Stage,
  Layer,
  Text,
  Line,
  Circle,
  Rect,
  KonvaNodeComponent,
  Ellipse,
} from "react-konva";
import { KonvaEventObject } from "konva/lib/Node";
import { Vector2d } from "konva/lib/types";
import { RectConfig } from "konva/lib/shapes/Rect";
import { EllipseConfig } from "konva/lib/shapes/Ellipse";
import { LineConfig } from "konva/lib/shapes/Line";
import { createEraser } from "./helpers/eraser";
import { WhiteboardContext } from "./context/context";

interface WhiteboardCanvasProps {}

// Probably setup a context to be able to handle color, size, etc so I don't have to prop drill all over.
// I also want to be able to save diff color/size settings for each tool rather than those being universal for every tool. And then save those settings to localstorage.
export const WhiteboardCanvas = (props: WhiteboardCanvasProps) => {
  const whiteboardContext = useContext(WhiteboardContext);
  const [layers, setLayers] = React.useState<any[]>([]);
  const [isDrawing, setIsDrawing] = React.useState(false);

  if (!whiteboardContext) return null;

  const { activeTool, updateActiveTool } = whiteboardContext;

  const handleMouseDown = (e: KonvaEventObject<MouseEvent>) => {
    setIsDrawing(true);
    const position = e.target.getStage()?.getPointerPosition();
    let newLayer;

    const [primaryTool, extendedTool] = activeTool.tool.split(".");
    const color = activeTool?.extended?.color;

    console.log({ primaryTool, extendedTool, color });
    if (position) {
      switch (primaryTool) {
        case "pen":
          newLayer = createDrawFree({ position, color });
          break;
        case "shape":
          if (extendedTool === "circle") {
            console.log("Making circle");
            newLayer = createCircle({ position, color });
            console.log({ newLayer: createCircle({ position, color }) });
          } else if (extendedTool === "rectangle") {
            newLayer = createRectangle({ position, color });
          }
          break;
        case "eraser":
          newLayer = createEraser({ position });
          break;
        case "text":
          newLayer = createText({ position, color });
          break;
      }
    }

    setLayers([...layers, newLayer]);
  };

  const handleMouseMove = (e: KonvaEventObject<MouseEvent>) => {
    if (!isDrawing) {
      return;
    }

    // prevent scrolling on touch devices
    e.evt.preventDefault();

    const stage = e.target.getStage();
    const position = stage?.getPointerPosition();
    let layer = layers[layers.length - 1];

    if (layer) {
      const [primaryTool, extendedTool] = layer.tool.split(".");

      if (position) {
        if (primaryTool === "pen") {
          layer = drawFree({ layer, position });
        } else if (primaryTool === "shape") {
          if (extendedTool === "circle") {
            layer = drawCircle({ layer, position });
          } else if (extendedTool === "rectangle") {
            layer = drawRectangle({ layer, position });
          }
        } else if (primaryTool === "eraser") {
          layer = drawFree({ layer, position });
        }
      }

      // replace last
      layers.splice(layers.length - 1, 1, layer);
      setLayers(layers.concat());
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  return (
    <div>
      <div className={tw`absolute z-10`}>
        <WhiteboardToolbar
          onToolChange={(selectedTool) => updateActiveTool(selectedTool)}
        />
      </div>

      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
      >
        <Layer>
          {layers.map((line, i) => {
            const Component = line?.component;

            return (
              Component && (
                <Component
                  key={i}
                  globalCompositeOperation={
                    line.tool === "eraser" ? "destination-out" : "source-over"
                  }
                  {...line}
                />
              )
            );
          })}
        </Layer>
      </Stage>
    </div>
  );
};
