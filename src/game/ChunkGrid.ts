import { Chunk } from "./Chunk";

export class ChunkGrid {
  private map: Map<number, Chunk>;
  
  constructor() {
    this.map = new Map<number, Chunk>();
  }

  getChunk(x: number, y: number): Chunk | undefined {
    return this.map.get(x * 4294967296 + y);
  }

  setChunk(x: number, y: number, chunk: Chunk) {
    const old = this.getChunk(x, y);
    if (old)
      old.cells = chunk.cells;
    else
      this.map.set(x * 4294967296 + y, chunk);
  }
}