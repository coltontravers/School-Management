import React from "react";
import { WhiteboardCanvas } from "~/components/whiteboard/WhiteboardCanvas";
import { WhiteboardToolbar } from "~/components/whiteboard/WhiteboardToolbar";

interface WhiteboardProps {}

const Whiteboard = (props: WhiteboardProps) => {
  return (
    <div>
      <WhiteboardToolbar />
      <WhiteboardCanvas />
    </div>
  );
};

export default Whiteboard;
