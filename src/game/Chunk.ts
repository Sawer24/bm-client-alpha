import type { Cell } from "./Cell";

export const chunkSize = 32;

export class Chunk {
  cells: Cell[][];

  constructor(cells: Cell[][]) {
    this. cells = cells;
  }
}
