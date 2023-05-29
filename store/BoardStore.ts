import { getTodosGroupedByColumn } from "@/lib/getTodosGroupedByColumn";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface BoardState {
  board: Board;
  getBoard: () => void;
}

export const useBoardtore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypedColum, Column>(),
  },
  getBoard: async () => {
    const board = await getTodosGroupedByColumn();
    set({ board });
  },
}));
