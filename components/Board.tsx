"use client";

import React, { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export default function Board() {
  useEffect(() => {}, []);
  return (
    <DragDropContext>
      <Droppable droppableId="board" direction="horizontal">
        {(provide) => <div>{/* rendering all th columns */}</div>}
      </Droppable>
    </DragDropContext>
  );
}
