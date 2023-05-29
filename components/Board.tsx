"use client";

import { useBoardtore } from "@/store/BoardStore";
import React, { useEffect } from "react";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";

export default function Board() {
  const [getBoard, board] = useBoardtore((state) => [
    state.getBoard,
    state.board,
  ]);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  const handleOnDrugEnd = (result: DropResult) => {};

  return (
    <DragDropContext onDragEnd={handleOnDrugEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {Array.from(board.columns.entries()).map(([id, collumn], index) => (
              <Column key={id} todos={collumn.todos} index={index} />
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
